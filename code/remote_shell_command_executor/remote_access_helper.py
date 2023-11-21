#!/usr/bin/env python3
# encoding: utf-8

import pathlib
import logging
from remote_host_info import RemoteHostInfo
from remote_shell_command_executor import RemoteShellCommandExecutor

LOGGER = logging.getLogger()

class RemoteAccessHelper:
    def __init__(self):
        self.host_info = None
        self.ssh_client = None

    def open(self, host_info):
        if self.ssh_client:
            return

        self.host_info = host_info
        self.ssh_client = RemoteShellCommandExecutor(host_info)
        self.ssh_client.connect()

    def close(self):
        if not self.ssh_client:
            return

        self.ssh_client.close()
        self.ssh_client = None
        self.host_info = None

    def mkdir_p(self, remote_dir):
        cmd = 'mkdir -p "{}"'.format(remote_dir)
        self.ssh_client.exec_command(cmd)

    def tar_dir(self, src_dir, dst_file_path):
        cmd = 'tar czvf "{}" "{}"'.format(src_dir, dst_file_path)
        self.ssh_client.exec_command(cmd)

    def put_dir(self, local_dir, remote_dir, file_pattern="*"):
        sftp = self.ssh_client.get_sftp()
        local_dir_path = pathlib.Path(local_dir)
        remote_dir_path = pathlib.Path(remote_dir)
        for local_file in local_dir_path.glob(file_pattern):
            remote_file = remote_dir_path/local_file.name 
            sftp.put(localpath=str(local_file), remotepath=str(remote_file))

    
