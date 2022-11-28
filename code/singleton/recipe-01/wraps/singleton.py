import functools

def singleton(cls):
    instances = {}
    @functools.wraps(cls)
    def get_instance(*args, **kwargs):
        if cls not in instances:
            instances[cls] = cls(*args, **kwargs)
        return instances[cls]
    return get_instance

if __name__ == "__main__":
    @singleton
    class singleCls(object):
        def foo(self):
            pass
    
    a = singleCls()
    b = singleCls()
    print(a == b)
    print(id(a) == id(b))
    print("singleCls.name: {}".format(singleCls.__name__))
