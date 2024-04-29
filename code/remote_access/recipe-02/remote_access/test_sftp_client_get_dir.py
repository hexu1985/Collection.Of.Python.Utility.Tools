#!/usr/bin/python3

import sys
import pathlib
import time
sys.path.append(str(pathlib.Path(__file__).resolve().parent.parent.resolve()))

from remote_host_info import RemoteHostInfo
from remote_file_transporter import create_remote_file_transporter, RemoteFileTransporter
import getpass

def print_progress(message):
    print(message, end='')

def test_sftp_client_get_dir():
    password = getpass.getpass()
    host_info = RemoteHostInfo(
            hostname = '192.168.70.116',
            port = 22,
            username = 'hexu',
            use_private_key = False,
            password = password)
    print('host_info: {}'.format(host_info))
    remote_transporter = create_remote_file_transporter(host_info, print_progress=print_progress, breakpoint_resume=True)

    remote_dir="/tmp"
    local_dir="/tmp/test/a"

    tic = time.time()
    remote_transporter.get_dir(remote_dir=remote_dir, local_dir=local_dir, file_pattern="*.md")
    toc = time.time()
    print(f'下载{remote_dir}完成')
    print("use time:", toc-tic, "sec")

if __name__ == "__main__":
    test_sftp_client_get_dir()

