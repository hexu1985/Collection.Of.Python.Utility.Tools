import sys
import traceback


def func1():
    raise NameError("--func1 exception--")

def func2():
    func1()

def main():
    func2()


if __name__ == '__main__':
    main()
