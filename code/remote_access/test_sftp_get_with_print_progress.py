#!/usr/bin/env python3
# encoding: utf-8

import sys
import pathlib
sys.path.append(str(pathlib.Path(__file__).resolve().parent.parent.resolve()))

from remote_host_info import RemoteHostInfo
from remote_access_helper import RemoteAccessHelper
import getpass
import functools

def test_sftp_put_dir():
    password = getpass.getpass()
    host_info = RemoteHostInfo(
            hostname = '192.168.70.128',
            port = 22,
            username = 'hexu',
            use_private_key = False,
            password = password)
    print('host_info: {}'.format(host_info))
    remote_access_helper = RemoteAccessHelper()
    remote_access_helper.open(host_info)

    remote_file = '/tmp/apt.tar.gz'
    local_file = pathlib.Path('/tmp/a/apt.tar.gz')
    local_dir = local_file.parent
    local_dir.mkdir(parents=True, exist_ok=True)
    remote_access_helper.get_file_with_print_progress(remote_file=remote_file, local_file=local_file, print_progress=functools.partial(print, end=''))
    for f in local_dir.glob("*"):
        print(f)

if __name__ == "__main__":
    test_sftp_put_dir()



