#!/usr/bin/env python3

import pathlib
import collections

DataFileInfo = collections.namedtuple('DataFileInfo', 'name path size mtime')

class DataFileCleaner:
    def __init__(self, data_dir, storage_bytes_upper_limit, remain_lastest_file_number):
        self.data_dir = pathlib.Path(data_dir)
        self.storage_bytes_upper_limit = storage_bytes_upper_limit
        self.remain_lastest_file_number = remain_lastest_file_number

    def get_file_pattern(self):
        return "*"

    def list_file_by_mtime(self):
        file_list = []
        for f in self.data_dir.rglob(self.get_file_pattern()):
            if not f.is_file():
                continue

            stat_info = f.lstat()
            file_info = DataFileInfo(name = f.name,
                    path = str(f), 
                    size = stat_info.st_size,
                    mtime = stat_info.st_mtime)
            file_list.append(file_info)

        file_list.sort(key = lambda f: f.mtime, reverse=True)

        return file_list

    def GetDeleteFileList(self):
        file_list = self.list_file_by_mtime()
        total_size = 0
        for i, file_info in enumerate(file_list):
            total_size += file_info.size
            if total_size >= self.storage_bytes_upper_limit:
                break
        return file_list[max(i, self.remain_lastest_file_number):]

def test_list_file_by_mtime(data_file_cleaner):
    for file_info in data_file_cleaner.list_file_by_mtime():
        print(file_info)

def test_get_delete_file_list(data_file_cleaner):
    for file_info in data_file_cleaner.GetDeleteFileList():
        print(file_info)

if __name__ == "__main__":
    import argparse

    parser = argparse.ArgumentParser()
    parser.add_argument("--dir", action="store",
                    default="/home/hexu/test", type=str,
                    dest='data_dir',
                    help='directory to clean')
    parser.add_argument('--bytes', action='store',
                    default=1024*1024, type=int,
                    dest='storage_bytes_upper_limit',
                    help='storage bytes of upper limit')
    parser.add_argument('--number', action='store',
                    default=3, type=int,
                    dest='remain_lastest_file_number',
                    help='remain number of lastest file')
    args = parser.parse_args()

    print(args)
    data_file_cleaner = DataFileCleaner(data_dir=args.data_dir,
            storage_bytes_upper_limit=args.storage_bytes_upper_limit,
            remain_lastest_file_number=args.remain_lastest_file_number)

    test_list_file_by_mtime(data_file_cleaner)
    print("="*80)
    test_get_delete_file_list(data_file_cleaner)

