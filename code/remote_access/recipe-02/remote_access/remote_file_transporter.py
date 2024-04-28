#!/usr/bin/env python3
# encoding: utf-8

import pathlib
import logging
import paramiko

LOGGER = logging.getLogger("remote_access")

class ProgressPrinter:
    def __init__(self, print_progress):
        self.print_progress = print_progress
        self.callback_count = 0

    def __call__(self, curr=100, total=100):
        self.callback_count += 1
        if self.callback_count % 10:
            return;
        bar_length = 40
        percents = float(curr) * 100 / float(total)
        filled = int(bar_length * curr / float(total))
        bar = '=' * filled + '-' * (bar_length - filled)
        self.print_progress('\rtranslating: [{}] {.2f}% already complete: {}, total: {}'.format(
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
            return self._put_file_with_breakpoint_resume(local_file=local_file, remote_file=remote_file)
        else:
            return self._put_file(local_file=local_file, remote_file=remote_file)

    def _put_file(local_file, remote_file):
        return self.sftp.put(localpath=local_file, remotepath=remote_file, callback=self.callback)

    def _put_file_with_breakpoint_resume(self, local_file, remote_file):
        pass

    def put_dir(self, local_dir, remote_dir, file_pattern="*", recursive=False):
        LOGGER.debug("put_dir(local_dir='{}', remote_dir='{}', file_pattern='{}')".format(local_dir, remote_dir, file_pattern)) 
        local_dir_path = pathlib.Path(local_dir)
        remote_dir_path = pathlib.Path(remote_dir)
        for local_file_path in local_dir_path.glob(file_pattern):
            remote_file_path = remote_dir_path/local_file_path.name 
            self.put_file(local_file=str(local_file_path), remote_file=str(remote_file_path))
            LOGGER.debug('put(local_file="{}", remote_file="{}")'.format(local_file_path, remote_file_path)) 

    def get_file(self, remote_file, local_file):
        if self.breakpoint_resume:
            self._get_file_with_breakpoint_resume(self, remote_file=remote_file, local_file=local_file)
        else:
            self._get_file(self, remote_file=remote_file, local_file=local_file)

    def _get_file(self, remote_file, local_file):
        return self.sftp.get(remotepath=remote_file, localpath=local_file, callback=self.callback)

    def _get_file_with_breakpoint_resume(self, remote_file, local_file):
        pass

    def get_dir(self, remote_dir, local_dir, file_pattern="*", recursive=False):
        LOGGER.debug("get_dir(remote_dir='{}', local_dir='{}', file_pattern='{}')".format(local_dir, remote_dir, file_pattern)) 
        local_dir_path = pathlib.Path(local_dir)
        remote_dir_path = pathlib.Path(remote_dir)
        for file_name in self.list_dir(remote_dir):
            remote_file_path = remote_dir_path/file_name
            local_file_path = local_dir_path/file_name
            self.get_file(remote_file=str(remote_file_path), local_file=str(local_file_path))
            LOGGER.debug('get(remote_file_path="{}", local_file_path="{}")'.format(local_file_path, remote_file_path)) 

    def list_dir(self, remote_dir):
        return self.sftp.listdir(remote_dir)

    def remove_empty_dir(self, remote_dir):
        return self.sftp.rmdir(remote_dir)

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

