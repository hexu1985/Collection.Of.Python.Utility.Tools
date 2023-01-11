
import threading

from worker_thread import WorkerThread

class WorkerThreadPool:
    def __init__(self):
        self.thread_pool = dict()
        self.lock = threading.Lock()

    def get_worker_thread(self, name):
        with self.lock:
            worker_thread = self.thread_pool.get(name)
            if not worker_thread:
                worker_thread = WorkerThread(name)
                worker_thread.start()
                self.thread_pool[name] = worker_thread
            return worker_thread

    def stop_all_worker_thread(self):
        stoping_thread_list = []
        with self.lock:
            for worker_thread in self.thread_pool.values():
                stoping_thread_list.append(worker_thread)
            self.thread_pool.clear()

        for worker_thread in stoping_thread_list:
            worker_thread.stop()

        for worker_thread in stoping_thread_list:
            worker_thread.join()


if __name__ == "__main__":

    import logging
    import time

    LOGGER = logging.getLogger()
    logging.basicConfig(level=logging.DEBUG, format="%(asctime)s %(filename)s [line:%(lineno)d] [tid:%(thread)d] %(levelname)s %(message)s")

    class DemoTask:
        def __init__(self, name):
            self.name = name

        def __call__(self):
            LOGGER.info("execute {}".format(self.name))
            time.sleep(1.0)

    print("test of worker_thread.py")
    worker_thread_pool = WorkerThreadPool()
    worker1 = worker_thread_pool.get_worker_thread("test1")
    worker2 = worker_thread_pool.get_worker_thread("test2")

    print("start task")
    for i in range(1, 5):
        worker1.putTask(DemoTask(i))
        worker2.putTask(DemoTask(i))

    print("exit of worker_thread.py")
    worker_thread_pool.stop_all_worker_thread()
