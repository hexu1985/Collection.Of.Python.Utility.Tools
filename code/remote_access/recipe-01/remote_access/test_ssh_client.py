#!/usr/bin/env python3
# encoding: utf-8

import sys
import pathlib
sys.path.append(str(pathlib.Path(__file__).resolve().parent.parent.resolve()))

from remote_host_info import RemoteHostInfo
from remote_shell_command_executor import RemoteShellCommandExecutor
import getpass

def test_ssh_client_password():
    password = getpass.getpass()
    host_info = RemoteHostInfo(
            hostname = '192.168.70.128',
            port = 22,
            username = 'hexu',
            use_private_key = False,
            password = password)
    print('host_info: {}'.format(host_info))
    remote_executor = RemoteShellCommandExecutor(host_info)
    remote_executor.connect(timeout=10)
    print(remote_executor.exec_command('df -h'))


if __name__ == "__main__":
    test_ssh_client_password()

