#!/usr/bin/env python3

import os
import subprocess
import logging
import psutil
import signal
import time
import threading

LOGGER = logging.getLogger()

class AllChildPidList:
    def __init__(self, pid):
        self.pid = pid
        self.child_pid_list = []

    def walk(self, pid):
        p = psutil.Process(pid)
        for child in p.children():
            self.child_pid_list.append(child.pid)
            self.walk(child.pid)

    def get(self):
        if not self.child_pid_list:
            self.walk(self.pid)

        return self.child_pid_list

class ShellCommandExecutor:
    def __init__(self, cmd, timeout=3600):
        self.cmd = cmd
        self.proc = None
        self.timeout = timeout
        self.start_time = None
        self.pipe_r, self.pipe_w = os.pipe()
        LOGGER.info("create ShellCommandExecutor(cmd=[{}])".format(self.cmd))

    def __str__(self):
        return 'ShellCommandExecutor("{}")'.format(self.cmd)

    def __repr__(self):
        return 'ShellCommandExecutor("{}")'.format(self.cmd)

    def run(self):
        try:
            self.proc = subprocess.Popen(self.cmd, shell=True, close_fds=True,
                    stdout=self.pipe_w, stderr=self.pipe_w)
            self.start_time = time.time()
            LOGGER.info('run cmd [{}]'.format(self.cmd))
            os.close(self.pipe_w)
        except subprocess.CalledProcessError as err:
            LOGGER.error('run cmd [{}] error: {}'.format(self.cmd, err))

    def wait(self):
        if not self.proc:
            LOGGER.error("cmd: [{}] is not run".format(self.cmd))
            return -1

        def print_output(cmd, pipe_r):
            output = os.fdopen(pipe_r)
            for line in output:
                LOGGER.info("cmd: [{}] output: {}".format(cmd, line.rstrip()))
            LOGGER.info("cmd: [{}] output thread exit".format(cmd))

        t = threading.Thread(target=print_output, args=(self.cmd, self.pipe_r), daemon=True)
        t.start()

        try:
            now = time.time()
            time_to_wait = self.timeout - (now - self.start_time)
            ret = self.proc.wait(time_to_wait)
            LOGGER.info("cmd: [{}] complete with ret: {}, escaped time: {}s".format(self.cmd, ret, int(now-self.start_time)))
            return ret
        except subprocess.TimeoutExpired as err:
            all_child_pid_list = AllChildPidList(self.proc.pid)
            for pid in all_child_pid_list.get():
                os.kill(pid, signal.SIGKILL)
            self.proc.kill()
            LOGGER.info("cmd: [{}] was killed because timeout".format(self.cmd))
            return -1


if __name__ == "__main__":
    print("test shell_command_executor.py")
    logging.basicConfig(level=logging.DEBUG)
    cmds = []

    cmds.append(ShellCommandExecutor("cd /tmp && pwd"))
    cmds.append(ShellCommandExecutor("./test.sh 3", 3))
    cmds.append(ShellCommandExecutor("./nosuchfile.sh"))

    for cmd in cmds:
        cmd.run()

    for cmd in cmds:
        cmd.wait()
