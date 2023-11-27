#!/usr/bin/env python3
# encoding: utf-8

import pathlib
import logging
import errno
from remote_access.remote_host_info import RemoteHostInfo
from remote_access.remote_shell_command_executor import RemoteShellCommandExecutor

LOGGER = logging.getLogger()

class RemoteAccessHelper:
    def __init__(self):
        self.remote_host = None
        self.ssh_client = None

    def open(self, remote_host):
        if self.ssh_client:
            return

        self.remote_host = remote_host
        self.ssh_client = RemoteShellCommandExecutor(remote_host)
        self.ssh_client.connect()

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

    def put_file(self, local_file, remote_file):
        sftp = self.ssh_client.get_sftp()
        return sftp.put(local_file, remote_file)

    def put_dir(self, local_dir, remote_dir, file_pattern="*"):
        LOGGER.debug('put_dir(local_dir="{}", remote_dir="{}")'.format(local_dir, remote_dir)) 
        sftp = self.ssh_client.get_sftp()
        local_dir_path = pathlib.Path(local_dir)
        remote_dir_path = pathlib.Path(remote_dir)
        for local_file in local_dir_path.glob(file_pattern):
            remote_file = remote_dir_path/local_file.name 
            sftp.put(localpath=str(local_file), remotepath=str(remote_file))
            LOGGER.debug('put(local_file="{}", remote_file="{}")'.format(local_file, remote_file)) 

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


