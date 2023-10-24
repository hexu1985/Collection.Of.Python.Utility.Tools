#!/usr/bin/env python3

import psutil
import io
import os
import sys
import logging
import traceback
import shutil
import pathlib

LOGGER = logging.getLogger()

class DiskUsageInfo:
    def __init__(self, disk_path):
        self.disk_path = disk_path
        usage = psutil.disk_usage(disk_path)
        self.total_storage = usage.total
        self.used_storage = usage.used
        self.free_storage = usage.free
        self.used_percent = usage.percent
        self.free_percent = 100 - usage.percent

    def __str__(self):
        strbuf = io.StringIO()
        strbuf.write('disk_path=["{}"], '.format(self.disk_path))
        strbuf.write('total_storage=["{}"], '.format(self.total_storage))
        strbuf.write('used_storage=["{}"], '.format(self.used_storage))
        strbuf.write('free_storage=["{}"], '.format(self.free_storage))
        strbuf.write('used_percent=["{}"], '.format(self.used_percent))
        strbuf.write('free_percent=["{}"], '.format(self.free_percent))
        strbuf.seek(0)
        return str(strbuf.read())


class FileSystemHelper:

    @staticmethod
    def GetDiskUsageInfo(path):
        return DiskUsageInfo(path)

    @staticmethod
    def GetFileSize(path):
        try:
            f = pathlib.Path(path)

            stat_info = f.lstat()
            return stat_info.st_size

        except:
            LOGGER.error("get file size {} failed: {}".format(path, traceback.format_exc(limit=1)))
            return 0

    @staticmethod
    def GetDirTotalSize(path, file_pattern='*'):
        p = pathlib.Path(path)
        total_size = FileSystemHelper.GetFileSize(path)
        for f in p.rglob(file_pattern):
            total_size += FileSystemHelper.GetFileSize(f)

        return total_size

    @staticmethod
    def GetPathTotalSize(path):
        p = pathlib.Path(path)
        if p.is_dir():
            return FileSystemHelper.GetDirTotalSize(path)
        else:
            return FileSystemHelper.GetFileSize(path)

    @staticmethod
    def RemoveFile(path):
        LOGGER.info("remove file: {}".format(path))
        try:
            os.unlink(path)
        except:
            LOGGER.error("remove file {} failed: {}".format(path, traceback.format_exc(limit=1)))

    @staticmethod
    def RemoveDirRecursive(path):
        LOGGER.info("remove dir recursive: {}".format(path))
        try:
            shutil.rmtree(path)
        except:
            LOGGER.error("remove dir {} failed: {}".format(path, traceback.format_exc(limit=1)))

    @staticmethod
    def GetDiskMountpointList(prefix):
        mountpoint_list = []
        for disk in psutil.disk_partitions():
            if not disk.mountpoint.startswith(prefix):
                continue
            mountpoint_list.append(disk.mountpoint)
        return mountpoint_list

    @staticmethod
    def GetSubDirList(path, pattern):
        p = pathlib.Path(path)
        return [d for d in p.glob(pattern) if d.is_dir()]

    @staticmethod
    def CreateDirIfNotExist(dir_path):
        path = pathlib.Path(dir_path)
        if path.exists():
            if not path.is_dir():
                LOGGER.error('path "{}" already exist but not dir'.format(path))
                return False
            elif not os.access(dir_path, os.W_OK):
                LOGGER.error('path "{}" already exist but not write permission'.format(path))
                return False
            else:
                return True
        else:
            path.mkdir(parents=True, exist_ok=True)
            return True


def test_get_disk_usage_info(path):
    disk_usage_info = FileSystemHelper.GetDiskUsageInfo(path)
    print(disk_usage_info)

def test_remove_file(path):
    FileSystemHelper.RemoveFile(path)

def test_remove_dir_recursive(path):
    FileSystemHelper.RemoveDirRecursive(path)

def test_get_disk_mountpoint_list(prefix):
    print(FileSystemHelper.GetDiskMountpointList(prefix))

def test_get_sub_dir_list(path):
    dir_list = FileSystemHelper.GetSubDirList(path, "*")
    for d in dir_list:
        print(d)

def test_create_dir(path):
    FileSystemHelper.CreateDirIfNotExist(path)

def test_dir_total_size(path, file_pattern):
    print("{} of {} size: {}".format(file_pattern, path, FileSystemHelper.GetDirTotalSize(path, file_pattern)))

def test_get_path_total_size(path):
    print("{} size: {}".format(path, FileSystemHelper.GetPathTotalSize(path)))

if __name__ == "__main__":
    test_create_dir("/tmp/abc")
    test_get_disk_usage_info("/")
    test_remove_file("/tmp/abc.txt")
    test_remove_dir_recursive("/tmp/abc")
    test_remove_dir_recursive("/tmp/abc")
    test_get_disk_mountpoint_list("/media")
    test_get_sub_dir_list("/home/hexu")
    test_dir_total_size("..", "*.py")
    test_get_path_total_size("..")
