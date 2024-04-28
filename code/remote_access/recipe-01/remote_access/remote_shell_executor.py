#!/usr/bin/env python3
# encoding: utf-8

import io
import paramiko
from remote_access.remote_host_info import RemoteHostInfo

class RemoteShellExecutor:
    def __init__(self, host_info):
        self.host_info = host_info
        self.ssh_client = paramiko.SSHClient()
        self.ssh_client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
        self.sftp_client = None

    def connect(self, timeout=None, compress=False):
        hostname = self.host_info.hostname
        port = self.host_info.port
        username = self.host_info.username
        if self.host_info.use_private_key:
            private_key = paramiko.RSAKey.from_private_key_file(self.host_info.private_key_file)
            self.ssh_client.connect(hostname=hostname, port=port, username=username, pkey=private_key, 
                    timeout=timeout, compress=compress)
        else:
            password = self.host_info.password
            self.ssh_client.connect(hostname=hostname, port=port, username=username, password=password,
                    timeout=timeout, compress=compress)

    def close(self):
        if self.sftp_client:
            self.sftp_client.close()
            self.sftp_client = None
        self.ssh_client.close()

    def get_sftp(self):
        if self.sftp_client:
            return self.sftp_client
        self.sftp_client = self.ssh_client.open_sftp()
        return self.sftp_client

    class ExecuteException(Exception):
        def __init__(self, host_info, command, error_msg):
            super().__init__(host_info, command, error_msg)
            self.host_info = host_info
            self.command = command
            self.error_msg = error_msg

        def __str__(self):
            string_io = io.StringIO()
            string_io.write("RemoteShellExecutor.ExecuteException:\n")
            string_io.write("host_info: {}\n".format(self.host_info))
            string_io.write("command: {}\n".format(self.command))
            string_io.write("error_msg: \n{}\n".format(self.error_msg))
            string_io.seek(0)
            return str(string_io.read())

    def exec_command(self, command, timeout=None):
        stdin, stdout, stderr = self.ssh_client.exec_command(command=command, timeout=timeout)
        stderr_info = stderr.read().decode('utf8')
        if stderr_info:
            raise RemoteShellExecutor.ExecuteException(self.host_info, command, stderr_info)
        stdout_info = stdout.read().decode('utf8')
        return stdout_info


