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

def test_sftp_cleint_password():
    password = getpass.getpass()
    host_info = RemoteHostInfo(
            hostname = '192.168.70.116',
            port = 22,
            username = 'hexu',
            use_private_key = False,
            password = password)
    print('host_info: {}'.format(host_info))
    remote_transporter = create_remote_file_transporter(host_info, print_progress=print_progress, breakpoint_resume=True)

    local_file="/home/hexu/white-rhino-031.20240303.small_bag.1709437214-1709437264.bag"
    remote_file="/tmp/white-rhino-031.20240303.small_bag.1709437214-1709437264.bag"
    save_file="/tmp/white-rhino-031.20240303.small_bag.1709437214-1709437264.bag"

    tic = time.time()
    remote_transporter.put_file(local_file=local_file, remote_file=remote_file)
    toc = time.time()
    print(f"上传{local_file}完成")
    print("use time:", toc-tic, "sec")

    tic = time.time()
    remote_transporter.get_file(remote_file=remote_file, local_file=save_file)
    toc = time.time()
    print(f'下载{save_file}完成')
    print("use time:", toc-tic, "sec")

if __name__ == "__main__":
    test_sftp_cleint_password()

