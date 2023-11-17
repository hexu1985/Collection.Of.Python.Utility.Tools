#!/usr/bin/env python3
# encoding: utf-8

import io
import paramiko
from remote_host_info import RemoteHostInfo

class RemoteShellCommandExecutor:
    def __init__(self, host_info):
        self.host_info = host_info
        self.ssh_client = paramiko.SSHClient()
        self.ssh_client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
        self.sftp_list = []

    def connect(self, timeout=None):
        hostname = self.host_info.hostname
        port = self.host_info.port
        username = self.host_info.username
        if self.host_info.use_private_key:
            self.ssh_client.load_host_keys(self.host_info.private_key_file)
            self.ssh_client.connect(hostname=hostname, port=port, username=username)
        else:
            password = self.host_info.password
            self.ssh_client.connect(hostname=hostname, port=port, username=username, password=password)

    def close(self):
        for sftp in self.sftp_list:
            sftp.close()
        self.ssh_client.close()

    def open_sftp(self):
        sftp = self.ssh_client.open_sftp()
        self.sftp_list.append(sftp)
        return sftp

    class ExecuteException(Exception):
        def __init__(self, host_info, command, error_msg):
            super().__init__(host_info, command, error_msg)
            self.host_info = host_info
            self.command = command
            self.error_msg = error_msg

        def __str__(self):
            string_io = io.StringIO()
            string_io.write("RemoteShellCommandExecutor.ExecuteException:\n")
            string_io.write("host_info: {}\n".format(self.host_info))
            string_io.write("command: {}\n".format(self.command))
            string_io.write("error_msg: \n{}\n".format(self.error_msg))
            string_io.seek(0)
            return str(string_io.read())

    def exec_command(self, command, timeout=None):
        stdin, stdout, stderr = self.ssh_client.exec_command(command=command, timeout=timeout)
        stderr_info = stderr.read().decode('utf8')
        if stderr_info:
            raise RemoteShellCommandExecutor.ExecuteException(self.host_info, command, stderr_info)
        stdout_info = stdout.read().decode('utf8')
        return stdout_info


