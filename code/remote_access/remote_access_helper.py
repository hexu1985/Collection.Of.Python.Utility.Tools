#!/usr/bin/env python3
# encoding: utf-8

import pathlib
import logging
import errno
from remote_access.remote_host_info import RemoteHostInfo
from remote_access.remote_shell_command_executor import RemoteShellCommandExecutor

LOGGER = logging.getLogger("remote_access")

class ProgressPrinter:
    def __init__(self, print_progress):
        self.print_progress = print_progress

    def __call__(self, curr=100, total=100):
        bar_length = 100
        percents = round(float(curr) * 100 / float(total), 2)
        filled = int(bar_length * curr / float(total))
        bar = '=' * filled + '-' * (bar_length - filled)
        self.print_progress('\rtranslating: [{}] {}% already complete: {}, total: {}'.format(
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

class RemoteAccessHelper:
    def __init__(self):
        self.remote_host = None
        self.ssh_client = None

    def open(self, remote_host, compress=False):
        LOGGER.debug("open(remote_host='{}', compress={})".format(remote_host, compress))
        if self.ssh_client:
            return

        self.remote_host = remote_host
        self.ssh_client = RemoteShellCommandExecutor(remote_host)
        self.ssh_client.connect(compress=compress)

    def close(self):
        if not self.ssh_client:
            return

        self.ssh_client.close()
        self.ssh_client = None
        self.remote_host = None

    def mkdir_p(self, remote_dir):
        cmd = 'mkdir -p "{}"'.format(remote_dir)
        return self.exec_command(cmd)

    def tar_dir(self, src_dir, dst_file_path):
        cmd = 'tar czvf "{}" "{}"'.format(src_dir, dst_file_path)
        return self.exec_command(cmd)

    def put_file(self, local_file, remote_file, callback=None, confirm=True):
        sftp = self.ssh_client.get_sftp()
        return sftp.put(localpath=str(local_file), remotepath=str(remote_file), callback=callback, confirm=confirm)

    def put_file_with_print_progress(self, local_file, remote_file, print_progress=print):
        sftp = self.ssh_client.get_sftp()
        return sftp.put(localpath=str(local_file), remotepath=str(remote_file), callback=ProgressPrinter(print_progress), confirm=True)

    def put_dir(self, local_dir, remote_dir, file_pattern="*"):
        self.put_dir_with_print_progress(local_dir, remote_dir, file_pattern, None)

    def put_dir_with_print_progress(self, local_dir, remote_dir, file_pattern="*", print_progress=None):
        LOGGER.debug("put_dir(local_dir='{}', remote_dir='{}', file_pattern='{}')".format(local_dir, remote_dir, file_pattern)) 
        sftp = self.ssh_client.get_sftp()
        local_dir_path = pathlib.Path(local_dir)
        remote_dir_path = pathlib.Path(remote_dir)
        for local_file in local_dir_path.glob(file_pattern):
            remote_file = remote_dir_path/local_file.name 
            if print_progress == None:
                sftp.put(localpath=str(local_file), remotepath=str(remote_file))
            else:
                sftp.put(localpath=str(local_file), remotepath=str(remote_file), callback=ProgressPrinter(print_progress), confirm=True)
            LOGGER.debug('put(local_file="{}", remote_file="{}")'.format(local_file, remote_file)) 

    def get_file(self, remote_file, local_file, callback=None):
        sftp = self.ssh_client.get_sftp()
        return sftp.get(remotepath=str(remote_file), localpath=str(local_file), callback=callback)

    def get_file_with_print_progress(self, remote_file, local_file, print_progress=print):
        sftp = self.ssh_client.get_sftp()
        return sftp.get(remotepath=str(remote_file), localpath=str(local_file), callback=ProgressPrinter(print_progress))

    def list_dir(self, remote_dir):
        sftp = self.ssh_client.get_sftp()
        return sftp.listdir(remote_dir)

    def is_exists(self, remote_path):
        try:
            sftp = self.ssh_client.get_sftp()
            sftp.stat(remote_path)
            return True
        except IOError as e:
            if e.errno == errno.ENOENT:
                return False
            else:
                raise

    def exec_command(self, command, timeout=None):
        return self.ssh_client.exec_command(command=command, timeout=timeout)


