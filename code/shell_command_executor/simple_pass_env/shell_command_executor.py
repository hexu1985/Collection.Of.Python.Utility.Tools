#!/usr/bin/env python3

import os
import subprocess
import logging
import argparse
import json

LOGGER = logging.getLogger()

class ShellCommandExecutor:
    def __init__(self, cmd, env=None):
        self.cmd = cmd
        self.env = env
        self.proc = None
        LOGGER.info("create ShellCommandExecutor(cmd=[{}])".format(self.cmd))

    def __str__(self):
        return 'ShellCommandExecutor("{}")'.format(self.cmd)

    def __repr__(self):
        return 'ShellCommandExecutor("{}")'.format(self.cmd)

    def run(self):
        try:
            self.proc = subprocess.Popen(self.cmd, shell=True, close_fds=True, env=self.env)
            LOGGER.info('run cmd [{}]'.format(self.cmd))
        except subprocess.CalledProcessError as err:
            LOGGER.error('run cmd [{}] error: {}'.format(self.cmd, err))

    def wait(self):
        if not self.proc:
            LOGGER.error("cmd: [{}] is not run".format(self.cmd))
            return -1

        ret = self.proc.wait()
        LOGGER.info("cmd: [{}] complete with ret: {}".format(self.cmd, ret))
        return ret


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

    cmds.append(ShellCommandExecutor("./test_env.sh", env=myenv))

    for cmd in cmds:
        cmd.run()

    for cmd in cmds:
        cmd.wait()
