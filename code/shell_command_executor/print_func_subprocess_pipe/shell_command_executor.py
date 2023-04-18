#!/usr/bin/env python3

import subprocess
import logging

LOGGER = logging.getLogger()

class ShellCommandExecutor:
    def __init__(self, cmd, print_func=None):
        self.cmd = cmd
        self.print_func = print_func
        self.proc = None
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
            self.proc = subprocess.Popen(self.cmd, shell=True, close_fds=True,
                    stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
            LOGGER.info('run cmd [{}]'.format(self.cmd))
        except subprocess.CalledProcessError as err:
            LOGGER.error('run cmd [{}] error: {}'.format(self.cmd, err))

    def wait(self):
        if not self.proc:
            LOGGER.error("cmd: [{}] is not run".format(self.cmd))
            return -1

        for line in self.proc.stdout:
            self.print_output(line.decode().strip())

        ret = self.proc.wait()
        LOGGER.info("cmd: [{}] complete with ret: {}".format(self.cmd, ret))
        return ret


if __name__ == "__main__":
    print("test shell_command_executor.py")
    logging.basicConfig(level=logging.DEBUG)
    cmds = []

    cmds.append(ShellCommandExecutor("cd /tmp && pwd"))
    cmds.append(ShellCommandExecutor("./test.sh 3", print_func=print))
    cmds.append(ShellCommandExecutor("./nosuchfile.sh"))

    for cmd in cmds:
        cmd.run()

    for cmd in cmds:
        cmd.wait()
