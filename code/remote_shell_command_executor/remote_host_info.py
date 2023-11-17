#!/usr/bin/env python3
# encoding: utf-8

import pathlib
import io

class RemoteHostInfo:
    def __init__(self, hostname, port, username, use_private_key=True, password="", private_key_file=""):
        self.hostname = hostname
        self.port = port
        self.username = username
        self.use_private_key = use_private_key
        if private_key_file:
            self.private_key_file = private_key_file
        else:
            self.private_key_file = pathlib.Path.home()/'.ssh'/'id_rsa'
        self.password = password

    def _write_property_fields(self, string_io):
        string_io.write("hostname=[{}], ".format(self.hostname))
        string_io.write("port=[{}], ".format(self.port))
        string_io.write("username=[{}], ".format(self.username))
        string_io.write("use_private_key=[{}], ".format(self.use_private_key))
        string_io.write("private_key_file=[{}], ".format(self.private_key_file))
        string_io.write("password=[{}], ".format('*'*len(self.password)))

    def __str__(self):
        string_io = io.StringIO()
        string_io.write("RemoteHostInfo: ")
        self._write_property_fields(string_io)
        string_io.seek(0)
        return str(string_io.read())

def test_remote_host_info():
    host_info = RemoteHostInfo(
            hostname = '192.168.1.24',
            port = 22,
            username = 'apollo',
            use_private_key = False,
            password = '123456')
    print('host_info: {}'.format(host_info))

if __name__ == "__main__":
    test_remote_host_info()
