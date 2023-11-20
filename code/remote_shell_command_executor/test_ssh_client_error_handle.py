#!/usr/bin/env python3
# encoding: utf-8

from remote_host_info import RemoteHostInfo
from remote_shell_command_executor import RemoteShellCommandExecutor
import getpass
import traceback
import sys


def test_ssh_client_raise_exception(remote_executor):
    try: 
        sftp = remote_executor.get_sftp()
        sftp.put("./raise_exception.py", "/tmp/raise_exception.py")
        print(remote_executor.exec_command('python3 /tmp/raise_exception.py'))
    except Exception as e:
        print("error: {}".format(e))


if __name__ == "__main__":
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
    test_ssh_client_raise_exception(remote_executor)
    remote_executor.close() 
