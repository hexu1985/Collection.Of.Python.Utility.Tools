
import pathlib
import signal
import logging
import threading
import functools
from singleton import singleton
from worker_thread import WorkerThread
from workflow_node_set import WorkflowNodeSet

LOGGER = logging.getLogger()

@singleton
class WorkflowService:
    def __init__(self):
        self.work_dir = None
        self.worker_thread = None
        self.workflow_lst = ["prework", "workflow", "postwork"]
        LOGGER.info('create WorkflowService()')

    def start(self, work_dir):
        if self.worker_thread:
            LOGGER.error("WorkflowService already started")
            return

        self.worker_thread = WorkerThread("WorkflowService")
        self.work_dir = work_dir
        self.worker_thread.start() 
        LOGGER.info('start WorkflowService("{}")'.format(self.work_dir))

    def OnSignalReceived(self, signum, stack):
        LOGGER.info("OnSignalReceived")
        class OnSignalReceivedTask:
            def __init__(self, workflow_service, signum, stack):
                self.workflow_service = workflow_service
                self.signum = signum
                self.stack = stack

            def execute(self):
                self.workflow_service.DoOnSignalReceived(self.signum, self.stack)

        self.worker_thread.putTask(OnSignalReceivedTask(self, signum, stack))

    def DoOnSignalReceived(self, signum, stack):
        LOGGER.info("DoOnSignalReceived, signum: {}".format(signum))
        self.DoRunWorkflow()

    def printUevent(self, uevent):
        LOGGER.info("-"*20)
        LOGGER.info("action: {}".format(uevent.action))
        LOGGER.info("devpath: {}".format(uevent.devpath))
        LOGGER.info("subsystem: {}".format(uevent.subsystem))
        LOGGER.info("devname: {}".format(uevent.devname))
        LOGGER.info("devtype: {}".format(uevent.devtype))
        LOGGER.info("timestamp: {}".format(int(uevent.timestamp)))
        LOGGER.info("-"*20)

    def DoRunWorkflow(self):
        for name in self.workflow_lst: 
            path = pathlib.Path(self.work_dir).joinpath(name)
            worflow = WorkflowNodeSet(path)
            worflow.run()
            worflow.wait()


if __name__ == "__main__":
    logging.basicConfig(level=logging.INFO)
    a = WorkflowService()
    b = WorkflowService()
    a.start(".")
    b.start(".")
