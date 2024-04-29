#!/usr/bin/env python3
# encoding: utf-8

import pathlib
import logging
import errno
from remote_access.remote_host_info import RemoteHostInfo
from remote_access.remote_shell_executor import RemoteShellExecutor
from remote_access.remote_file_transporter import RemoteFileTransporter
from remote_access.remote_access_helper_config import *

LOGGER = logging.getLogger("remote_access")

class RemoteAccessHelper:
    def __init__(self):
        self.remote_host = None
        self.ssh_client = None

    def open(self, remote_host, compress=False):
        LOGGER.debug("open(remote_host='{}', compress={})".format(remote_host, compress))
        if self.ssh_client:
            return

        self.remote_host = remote_host
        self.ssh_client = RemoteShellExecutor(remote_host)
        self.ssh_client.connect(compress=compress, timeout=SSH_CLIENT_CONNECT_TIMEDOUT_SECS)

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

    def remove_file(self, path):
        sftp_client = RemoteFileTransporter(self.ssh_client.get_sftp())
        return sftp_client.remove_file(str(path))

    def put_file(self, local_file, remote_file, print_progress=None, breakpoint_resume=True):
        sftp_client = RemoteFileTransporter(self.ssh_client.get_sftp(), 
                print_progress=print_progress, breakpoint_resume=breakpoint_resume)
        return sftp_client.put_file(local_file=str(local_file), remote_file=str(remote_file))

    def put_dir(self, local_dir, remote_dir, file_pattern="*", print_progress=None, breakpoint_resume=True):
        sftp_client = RemoteFileTransporter(self.ssh_client.get_sftp(), 
                print_progress=print_progress, breakpoint_resume=breakpoint_resume)
        return sftp_client.put_dir(local_dir=str(local_dir), remote_dir=str(remote_dir), file_pattern=file_pattern)

    def get_file(self, remote_file, local_file, print_progress=None, breakpoint_resume=True):
        sftp_client = RemoteFileTransporter(self.ssh_client.get_sftp(), 
                print_progress=print_progress, breakpoint_resume=breakpoint_resume)
        return sftp_client.get_file(remote_file=str(remote_file), local_file=str(local_file))

    def get_dir(self, remote_dir, local_dir, file_pattern="*", print_progress=None, breakpoint_resume=True):
        sftp_client = RemoteFileTransporter(self.ssh_client.get_sftp(), 
                print_progress=print_progress, breakpoint_resume=breakpoint_resume)
        return sftp_client.get_dir(remote_dir=str(remote_dir), local_dir=str(local_dir), file_pattern=file_pattern)

    def list_dir(self, remote_dir):
        sftp_client = RemoteFileTransporter(self.ssh_client.get_sftp())
        return sftp_client.list_dir(str(remote_dir))

    def remove_empty_dir(self, remote_dir):
        sftp_client = RemoteFileTransporter(self.ssh_client.get_sftp())
        return sftp_client.remove_empty_dir(str(remote_dir))

    def remove_dir(self, remote_dir):
        sftp_client = RemoteFileTransporter(self.ssh_client.get_sftp())
        return sftp_client.remove_dir(str(remote_dir))

    def is_exists(self, remote_path):
        sftp_client = RemoteFileTransporter(self.ssh_client.get_sftp())
        return sftp_client.is_exists(str(remote_path))

    def exec_command(self, command, timeout=None):
        return self.ssh_client.exec_command(command=command, timeout=timeout)


