#!/usr/bin/env python3
# encoding: utf-8

import sys
import pathlib
sys.path.append(str(pathlib.Path(__file__).resolve().parent.parent.resolve()))

from remote_host_info import RemoteHostInfo
from remote_access_helper import RemoteAccessHelper
import getpass
import functools
import logging

logging.basicConfig(level=logging.DEBUG)

def print_progress(message):
    print(message, end='')

def test_sftp_get_file():
    password = getpass.getpass()
    host_info = RemoteHostInfo(
            hostname = '192.168.70.116',
            port = 22,
            username = 'hexu',
            use_private_key = False,
            password = password)
    print('host_info: {}'.format(host_info))
    remote_access_helper = RemoteAccessHelper()
    remote_access_helper.open(host_info, compress=True)

    local_file="/tmp/white-rhino-031.20240303.small_bag.1709437214-1709437264.bag"
    remote_file="/tmp/white-rhino-031.20240303.small_bag.1709437214-1709437264.bag"
    local_dir = pathlib.Path(local_file).parent
    local_dir.mkdir(parents=True, exist_ok=True)
    remote_access_helper.get_file(remote_file=remote_file, local_file=local_file, print_progress=print_progress)
    for f in local_dir.glob("*"):
        print(f)

if __name__ == "__main__":
    test_sftp_get_file()



