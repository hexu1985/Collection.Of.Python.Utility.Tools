#!/usr/bin/python3

import sys
import pathlib
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
    remote_transporter = create_remote_file_transporter(host_info, print_progress=print_progress)

    local_file="/home/hexu/white-rhino-031.20240303.small_bag.1709437214-1709437264.bag"
    remote_file="/tmp/white-rhino-031.20240303.small_bag.1709437214-1709437264.bag"
    save_file="/tmp/white-rhino-031.20240303.small_bag.1709437214-1709437264.bag"

    remote_transporter.put_file(local_file=local_file, remote_file=remote_file)
    print(f"上传{local_file}完成")
    remote_transporter.get_file(remote_file=remote_file, local_file=save_file)
    print(f'下载{save_file}完成')

if __name__ == "__main__":
    test_sftp_cleint_password()

