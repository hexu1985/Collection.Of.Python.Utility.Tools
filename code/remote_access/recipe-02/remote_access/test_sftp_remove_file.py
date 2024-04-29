#!/usr/bin/env python3
# encoding: utf-8

import sys
import pathlib
sys.path.append(str(pathlib.Path(__file__).resolve().parent.parent.resolve()))

from remote_host_info import RemoteHostInfo
from remote_access_helper import RemoteAccessHelper
import getpass

def test_sftp_remove_file():
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

    remote_dir = '/tmp/test/a'
    remote_access_helper.remove_file(remote_dir)

if __name__ == "__main__":
    test_sftp_remove_file()



