#!/usr/bin/env python3
# encoding: utf-8

import pathlib
import logging
import paramiko
import errno
import fnmatch
import stat
from remote_access.remote_host_info import RemoteHostInfo

LOGGER = logging.getLogger("remote_access")

class ProgressPrinter:
    def __init__(self, print_progress):
        self.print_progress = print_progress
        self.callback_count = 0

    def __call__(self, curr=100, total=100):
        self.callback_count += 1
        percents = float(curr) * 100 / float(total)
        if self.callback_count % 100 and 0.1 < percents < 99.9:
            return;

        bar_length = 40
        filled = int(bar_length * curr / float(total))
        bar = '=' * filled + '-' * (bar_length - filled)
        self.print_progress('\rtranslating: [{}] {:.2f}% already complete: {}, total: {}'.format(
            bar, percents, self.translate_byte(curr), self.translate_byte(total)))

        if curr >= total:
            self.print_progress('\n')

    def translate_byte(self, B):
        B = float(B)
        KB = float(1024)
        MB = float(KB ** 2)
        GB = float(MB ** 2)
        TB = float(GB ** 2)
        if B < KB:
            return '{} {}'.format(B, 'bytes' if B > 1 else byte)
        elif KB < B < MB:
            return '{:.2f} KB'.format(B / KB)
        elif MB < B < GB:
            return '{:.2f} MB'.format(B / MB)
        elif GB < B < TB:
            return '{:.2f} GB'.format(B / GB)
        else:
            return '{:.2f} TB'.format(B / TB)

class RemoteFileTransporter:
    def __init__(self, sftp, print_progress=None, breakpoint_resume=False):
        self.sftp = sftp
        if print_progress:
            self.call_back = ProgressPrinter(print_progress)
        else:
            self.call_back = None
        self.breakpoint_resume = breakpoint_resume

    def put_file(self, local_file, remote_file):
        if self.breakpoint_resume:
            self._put_file_with_breakpoint_resume(local_file=local_file, remote_file=remote_file)
        else:
            self._put_file(local_file=local_file, remote_file=remote_file)

    def _put_file(self, local_file, remote_file):
        self.sftp.put(localpath=local_file, remotepath=remote_file, callback=self.call_back)

    def _put_file_with_breakpoint_resume(self, local_file, remote_file):
        remote_file_size = self.get_file_size(remote_file)
        local_file_size = self._get_local_file_size(local_file)
        if remote_file_size == local_file_size:
            if self.call_back:
                self.call_back(remote_file_size, local_file_size)
        else:
            self._put_file(local_file=local_file, remote_file=remote_file)

    def put_dir(self, local_dir, remote_dir, file_pattern="*"):
        LOGGER.debug("put_dir(local_dir='{}', remote_dir='{}', file_pattern='{}')".format(local_dir, remote_dir, file_pattern)) 
        local_dir_path = pathlib.Path(local_dir)
        remote_dir_path = pathlib.Path(remote_dir)
        for local_file_path in local_dir_path.glob(file_pattern):
            if not local_file_path.is_file():
                continue

            remote_file_path = remote_dir_path/local_file_path.name 
            self.put_file(local_file=str(local_file_path), remote_file=str(remote_file_path))
            LOGGER.debug('put(local_file="{}", remote_file="{}")'.format(local_file_path, remote_file_path)) 

    def get_file(self, remote_file, local_file):
        if self.breakpoint_resume:
            self._get_file_with_breakpoint_resume(remote_file=remote_file, local_file=local_file)
        else:
            self._get_file(remote_file=remote_file, local_file=local_file)

    def _get_file(self, remote_file, local_file):
        self.sftp.get(remotepath=remote_file, localpath=local_file, callback=self.call_back)

    def _get_file_with_breakpoint_resume(self, remote_file, local_file):
        remote_file_size = self.get_file_size(remote_file)
        local_file_size = self._get_local_file_size(local_file)
        if remote_file_size == local_file_size:
            if self.call_back:
                self.call_back(local_file_size, remote_file_size)
        else:
            self._get_file(remote_file=remote_file, local_file=local_file)

    def get_dir(self, remote_dir, local_dir, file_pattern="*"):
        LOGGER.debug("get_dir(remote_dir='{}', local_dir='{}', file_pattern='{}')".format(local_dir, remote_dir, file_pattern)) 
        local_dir_path = pathlib.Path(local_dir)
        remote_dir_path = pathlib.Path(remote_dir)
        for item in self.sftp.listdir_attr(remote_dir):
            if not stat.S_ISREG(item.st_mode):
                continue

            if not fnmatch.fnmatch(item.filename, file_pattern):
                continue

            file_name = item.filename
            remote_file_path = remote_dir_path/file_name
            local_file_path = local_dir_path/file_name
            self.get_file(remote_file=str(remote_file_path), local_file=str(local_file_path))
            LOGGER.debug('get(remote_file_path="{}", local_file_path="{}")'.format(local_file_path, remote_file_path)) 

    def list_dir(self, remote_dir):
        return self.sftp.listdir(remote_dir)

    def remove_empty_dir(self, remote_dir):
        self.sftp.rmdir(remote_dir)

    def remove_dir(self, remote_dir, recursive=False):
        for remote_file in self.list_dir(remote_dir):
            self.remove_file(remote_dir+"/"+remote_file)
        self.remove_empty_dir(remote_dir)

    def is_exists(self, remote_path):
        try:
            self.sftp.stat(remote_path)
            return True
        except IOError as e:
            if e.errno == errno.ENOENT:
                return False
            else:
                raise

    def get_file_size(self, remote_path):
        try:
            stat = self.sftp.stat(remote_path)
            return stat.st_size
        except IOError as e:
            if e.errno == errno.ENOENT:
                return 0
            else:
                raise

    def _get_local_file_size(self, local_path):
        try:
            f = pathlib.Path(local_path)
            stat_info = f.lstat()
            return stat_info.st_size
        except:
            return 0


def create_remote_file_transporter(host_info, print_progress=None, breakpoint_resume=False, compress=False):
    hostname = host_info.hostname
    port = host_info.port
    username = host_info.username

    tran = paramiko.Transport((hostname, port))
    if host_info.use_private_key:
        private_key = paramiko.RSAKey.from_private_key_file(host_info.private_key_file)
        tran.connect(username=username, pkey=private_key, compress=compress)
    else:
        password = host_info.password
        tran.connect(username=username, password=password)
    sftp = paramiko.SFTPClient.from_transport(tran)
    return RemoteFileTransporter(sftp, print_progress=print_progress, breakpoint_resume=breakpoint_resume)
