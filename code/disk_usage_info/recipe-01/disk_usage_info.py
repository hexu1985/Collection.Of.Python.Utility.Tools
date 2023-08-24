
import psutil
import io

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


if __name__ == "__main__":
    disk_usage_info = DiskUsageInfo("/")
    print(disk_usage_info)
