#!/usr/bin/env python3
# encoding: utf-8

import sys
import pathlib
sys.path.append(str(pathlib.Path(__file__).resolve().parent.parent.resolve()))

from remote_host_info import RemoteHostInfo
from remote_access_helper import RemoteAccessHelper
import getpass

def print_progress(message):
    print(message, end='')

def test_sftp_put_dir():
    password = getpass.getpass()
    host_info = RemoteHostInfo(
            hostname = '192.168.70.116',
            port = 22,
            username = 'hexu',
            use_private_key = False,
            password = password)
    print('host_info: {}'.format(host_info))
    remote_access_helper = RemoteAccessHelper()
    remote_access_helper.open(host_info)

    local_dir = "."
    remote_dir = '/tmp/remote_access'
    remote_access_helper.mkdir_p(remote_dir)
    remote_access_helper.put_dir(local_dir=local_dir, remote_dir=remote_dir, file_pattern="*.py", print_progress=print_progress)
    for file_name in remote_access_helper.list_dir(remote_dir):
        print(file_name)

if __name__ == "__main__":
    test_sftp_put_dir()


