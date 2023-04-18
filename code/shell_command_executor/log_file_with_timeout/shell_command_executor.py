#!/usr/bin/env python3

import subprocess
import logging
import datetime
import sys
import pathlib
import time
import os
import signal

LOGGER = logging.getLogger()

class ShellCommandExecutor:
    LOG_DIR = "/tmp"

    def __init__(self, cmd, timeout=7200):
        self.cmd = cmd
        self.proc = None
        self.logfile = None
        self.timeout = timeout
        self.start_time = None
        self.logfile_path = None
        LOGGER.info("create ShellCommandExecutor(cmd=[{}])".format(self.cmd))

    def __str__(self):
        return 'ShellCommandExecutor("{}")'.format(self.cmd)

    def __repr__(self):
        return 'ShellCommandExecutor("{}")'.format(self.cmd)

    def run(self):
        try:
            self.logfile_path = self.LOG_DIR+"/shell_command_executor.log.%s"%datetime.datetime.now().strftime('%Y%m%d-%H%M%S.%f')
            self.logfile = open(self.logfile_path, 'w')
            self.logfile.write("\ncmd [{}] start at {}\n".format(self.cmd, datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S.%f')))
            self.logfile.write("\n{}\n".format("*"*20))
            self.logfile.flush()
            self.proc = subprocess.Popen(self.cmd, shell=True, close_fds=True, stdout=self.logfile, stderr=self.logfile, preexec_fn=os.setpgrp)
            self.start_time = time.time()
            LOGGER.info('run cmd [{}], logfile_path: {}'.format(self.cmd, self.logfile_path))
        except Exception as err:
            LOGGER.error('run cmd [{}] error: {}'.format(self.cmd, err))
            if self.logfile:
                self.logfile.close()
            self.proc = None

    def wait(self):
        if not self.proc:
            LOGGER.error("cmd: [{}] is not run".format(self.cmd))
            return -1

        try:
            now = time.time()
            time_to_wait = self.timeout - (now - self.start_time)
            ret = self.proc.wait(time_to_wait)
            now = time.time()
            self.logfile.write("\n{}\n".format("*"*20))
            self.logfile.write("\ncmd [{}] end at {}\n".format(self.cmd, datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S.%f')))
            self.logfile.flush()
            LOGGER.info("cmd: [{}] complete with ret: {}, logfile_path: {}, escaped time: {}s".format(self.cmd, ret, self.logfile_path, int(now-self.start_time)))
        except subprocess.TimeoutExpired as err:
            os.killpg(self.proc.pid, signal.SIGTERM)
            self.logfile.write("\n{}\n".format("*"*20))
            self.logfile.write("\ncmd [{}] timeout at {}\n".format(self.cmd, datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S.%f')))
            self.logfile.flush()
            LOGGER.info("cmd: [{}] was killed because timeout, logfile_path: {}".format(self.cmd, self.logfile_path))

        self.logfile.close()


if __name__ == "__main__":
    print("test shell_command_executor.py")
    logging.basicConfig(level=logging.DEBUG)
    cmds = []

    ShellCommandExecutor.LOG_DIR="/home/hexu/tmp"
    cmds.append(ShellCommandExecutor("cd /tmp && pwd"))
    cmds.append(ShellCommandExecutor("./test.sh 3", 3))
    cmds.append(ShellCommandExecutor("./nosuchfile.sh"))

    for cmd in cmds:
        cmd.run()

    for cmd in cmds:
        cmd.wait()
