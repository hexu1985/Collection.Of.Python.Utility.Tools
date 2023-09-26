#!/usr/bin/env python3

import subprocess
import logging
import datetime
import sys
import pathlib
import time
import os
import psutil
import signal
import argparse
import json

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
    LOG_DIR = "/tmp"

    def __init__(self, cmd, env=None, timeout=7200, logfile_path=None):
        self.cmd = cmd
        self.env = env
        self.proc = None
        self.logfile = None
        self.timeout = timeout
        self.start_time = None
        self.logfile_path = logfile_path
        LOGGER.info("create ShellCommandExecutor(cmd=[{}])".format(self.cmd))

    def __str__(self):
        return 'ShellCommandExecutor("{}")'.format(self.cmd)

    def __repr__(self):
        return 'ShellCommandExecutor("{}")'.format(self.cmd)

    def run(self):
        try:
            if not self.logfile_path:
                self.logfile_path = self.LOG_DIR+"/shell_command_executor.log.%s"%datetime.datetime.now().strftime('%Y%m%d-%H%M%S.%f')
            self.logfile = open(self.logfile_path, 'w')
            self.logfile.write("\ncmd [{}] start at {}\n".format(self.cmd, datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S.%f')))
            self.logfile.write("\n{}\n".format("*"*20))
            self.logfile.flush()
            self.proc = subprocess.Popen(self.cmd, shell=True, close_fds=True, stdout=self.logfile, stderr=self.logfile, env=self.env)
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
            self.logfile.close()
            LOGGER.info("cmd: [{}] complete with ret: {}, logfile_path: {}, escaped time: {}s".format(self.cmd, ret, self.logfile_path, int(now-self.start_time)))
            return ret
        except subprocess.TimeoutExpired as err:
            all_child_pid_list = AllChildPidList(self.proc.pid)
            for pid in all_child_pid_list.get():
                os.kill(pid, signal.SIGKILL)
            self.proc.kill()
            self.logfile.write("\n{}\n".format("*"*20))
            self.logfile.write("\ncmd [{}] timeout at {}\n".format(self.cmd, datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S.%f')))
            self.logfile.flush()
            self.logfile.close()
            LOGGER.info("cmd: [{}] was killed because timeout, logfile_path: {}".format(self.cmd, self.logfile_path))
            return -1



if __name__ == "__main__":
    print("test shell_command_executor.py")
    logging.basicConfig(level=logging.DEBUG)

    parser = argparse.ArgumentParser()
    parser.add_argument("--env-dict", action="store",
                    required=False, type=str,
                    dest='env_dict',
                    default="")
    parser.add_argument('--no-derived', action='store_true',
                    default=False,
                    dest='no_derived',
                    help='set to not derived env variables from parent process')
    args = parser.parse_args()

    print("args: {}".format(args))

    myenv = dict()
    if not args.no_derived:
        print("copy from environ")
        myenv.update(os.environ.copy())

    if args.env_dict:
        print("update from {}".format(args.env_dict))
        myenv.update(json.loads(args.env_dict))

    cmds = []

    cmds.append(ShellCommandExecutor("./test_env.sh", env=myenv, logfile_path="/tmp/test_env.log"))
    cmds.append(ShellCommandExecutor("cd /tmp && pwd"))
    cmds.append(ShellCommandExecutor("./test.sh 3", timeout=3))
    cmds.append(ShellCommandExecutor("./nosuchfile.sh", logfile_path="/tmp/nosuchfile.log"))

    for cmd in cmds:
        cmd.run()

    for cmd in cmds:
        cmd.wait()
