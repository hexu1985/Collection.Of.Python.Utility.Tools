#!/usr/bin/env python3

import subprocess
import logging

LOGGER = logging.getLogger()

class ShellCommandExecutor:
    def __init__(self, cmd):
        self.cmd = cmd
        self.proc = None
        LOGGER.info("create ShellCommandExecutor(cmd=[{}])".format(self.cmd))

    def __str__(self):
        return 'ShellCommandExecutor("{}")'.format(self.cmd)

    def __repr__(self):
        return 'ShellCommandExecutor("{}")'.format(self.cmd)

    def run(self):
        try:
            self.proc = subprocess.Popen(self.cmd, shell=True, close_fds=True)
            LOGGER.info('run cmd [{}]'.format(self.cmd))
        except subprocess.CalledProcessError as err:
            LOGGER.error('run cmd [{}] error: {}'.format(self.cmd, err))

    def is_alive(self):
        if not self.proc:
            LOGGER.error("cmd: [{}] is not run".format(self.cmd))
            return False

        return self.proc.poll() == None

    def wait(self):
        if not self.proc:
            LOGGER.error("cmd: [{}] is not run".format(self.cmd))
            return -1

        ret = self.proc.wait()
        LOGGER.info("cmd: [{}] complete with ret: {}".format(self.cmd, ret))
        return ret


if __name__ == "__main__":
    import time
    print("test shell_command_executor.py")
    logging.basicConfig(level=logging.DEBUG)
    cmds = []

    cmds.append(ShellCommandExecutor("cd /tmp && pwd"))
    cmds.append(ShellCommandExecutor("./test.sh 3"))
    cmds.append(ShellCommandExecutor("./nosuchfile.sh"))

    for cmd in cmds:
        cmd.run()

    while True:
        completed_count = 0
        for cmd in cmds:
            print("{} is_alived? {}".format(cmd, cmd.is_alive()))
            if not cmd.is_alive():
                completed_count += 1
        if completed_count == len(cmds):
            break;
        time.sleep(1)

    for cmd in cmds:
        cmd.wait()
