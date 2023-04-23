#!/usr/bin/env python3

import subprocess
import signal
import time
import os
import logging
import threading

LOGGER = logging.getLogger()

class ShellCommandExecutor:
    def __init__(self, cmd, timeout=3600, print_func=None):
        self.cmd = cmd
        self.print_func = print_func
        self.timeout = timeout
        self.proc = None
        self.start_time = None
        LOGGER.info("create ShellCommandExecutor(cmd=[{}])".format(self.cmd))

    def print_output(self, message):
        if self.print_func:
            self.print_func(message)
        else:
            LOGGER.info("cmd: [{}] output: {}".format(self.cmd, message))

    def __str__(self):
        return 'ShellCommandExecutor("{}")'.format(self.cmd)

    def __repr__(self):
        return 'ShellCommandExecutor("{}")'.format(self.cmd)

    def run(self):
        try:
            self.proc = subprocess.Popen(self.cmd, shell=True, close_fds=True, preexec_fn=os.setpgrp,
                    stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
            self.start_time = time.time()
            LOGGER.info('run cmd [{}]'.format(self.cmd))
        except subprocess.CalledProcessError as err:
            LOGGER.error('run cmd [{}] error: {}'.format(self.cmd, err))

    def wait(self):
        if not self.proc:
            LOGGER.error("cmd: [{}] is not run".format(self.cmd))
            return -1

        def print_output(cmd, output, print_func):
            for line in output:
                print_func(line.decode().rstrip())
            LOGGER.info("cmd: [{}] output thread exit".format(cmd))

        t = threading.Thread(target=print_output, args=(self.cmd, self.proc.stdout, self.print_output), daemon=True)
        t.start()

        try:
            now = time.time()
            time_to_wait = self.timeout - (now - self.start_time)
            ret = self.proc.wait(time_to_wait)
            LOGGER.info("cmd: [{}] complete with ret: {}, escaped time: {}s".format(self.cmd, ret, int(now-self.start_time)))
            return ret
        except subprocess.TimeoutExpired as err:
            os.killpg(self.proc.pid, signal.SIGKILL)
            LOGGER.info("cmd: [{}] was killed because timeout".format(self.cmd))
            return -1


if __name__ == "__main__":
    print("test shell_command_executor.py")
    logging.basicConfig(level=logging.DEBUG)
    cmds = []

    cmds.append(ShellCommandExecutor("cd /tmp && pwd"))
    cmds.append(ShellCommandExecutor("./test.sh 3", 3, print_func=print))
    cmds.append(ShellCommandExecutor("./nosuchfile.sh"))

    for cmd in cmds:
        cmd.run()

    for cmd in cmds:
        cmd.wait()