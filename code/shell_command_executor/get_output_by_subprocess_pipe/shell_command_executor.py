#!/usr/bin/env python3

import subprocess
import logging
import threading

LOGGER = logging.getLogger()

class ShellCommandExecutor:
    def __init__(self, cmd, output_callback=print):
        self.cmd = cmd
        self.output_callback = output_callback
        self.proc = None
        LOGGER.info("create ShellCommandExecutor(cmd=[{}])".format(self.cmd))

    def __str__(self):
        return 'ShellCommandExecutor("{}")'.format(self.cmd)

    def __repr__(self):
        return 'ShellCommandExecutor("{}")'.format(self.cmd)

    def run(self):
        try:
            self.proc = subprocess.Popen(self.cmd, shell=True, close_fds=True,
                    stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
            LOGGER.info('run cmd [{}]'.format(self.cmd))

            def print_output(cmd, output, output_callback):
                for line in output:
                    line = line.decode().rstrip()
                    output_callback(line)
                    LOGGER.info("cmd: [{}] output: {}".format(cmd, line))
                LOGGER.debug("cmd: [{}] output thread exit".format(cmd))

            t = threading.Thread(target=print_output, args=(self.cmd, self.proc.stdout, self.output_callback), daemon=True)
            t.start()

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
    cmds = []

    cmds.append(ShellCommandExecutor("cd /tmp && pwd"))
    cmds.append(ShellCommandExecutor("./test.sh 3"))
    cmds.append(ShellCommandExecutor("./nosuchfile.sh"))

    for cmd in cmds:
        cmd.run()

    for cmd in cmds:
        cmd.wait()
