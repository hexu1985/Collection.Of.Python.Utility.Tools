#!/usr/bin/python3
# -*- coding: utf-8 -*-
import threading

def synchronized(func):
    func.__lock__ = threading.Lock()

    def synced_func(*args, **kws):
        with func.__lock__:
            return func(*args, **kws)

    return synced_func

def singleton(cls):
    instances = {}

    @synchronized
    def get_instance(*args, **kw):
        if cls not in instances:
            instances[cls] = cls(*args, **kw)
        return instances[cls]

    return get_instance

def worker():
    single_test = test()
    print("id----> %s" % id(single_test))

@singleton
class test:
    a = 1

if __name__ == "__main__":
    task_list = []
    for one in range(30):
        t = threading.Thread(target=worker)
        task_list.append(t)
    for one in task_list:
        one.start()
    for one in task_list:
        one.join()
    print("test.name: {}".format(test.__name__))
