#!/usr/bin/env python3
# encoding: utf-8

import sys
import pathlib
import logging
import traceback
sys.path.append(str(pathlib.Path(__file__).resolve().parent.parent.resolve()))

from remote_host_info import RemoteHostInfo
from remote_access_helper import RemoteAccessHelper
import getpass

logger = logging.getLogger()

def test_sftp_remove_dir():
    password = getpass.getpass()
    host_info = RemoteHostInfo(
            hostname = '192.168.100.186',
            port = 22,
            username = 'hexu',
            use_private_key = False,
            password = password)
    print('host_info: {}'.format(host_info))
    remote_access_helper = RemoteAccessHelper()
    remote_access_helper.open(host_info)

    remote_dir = '/tmp/test'
    try:
        remote_access_helper.remove_dir(remote_dir)
    except:
        logger.error(traceback.format_exc(limit=1))

if __name__ == "__main__":
    test_sftp_remove_dir()



