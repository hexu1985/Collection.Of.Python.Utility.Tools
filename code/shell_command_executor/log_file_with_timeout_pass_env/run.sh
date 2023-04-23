#!/bin/bash

set -x
python3 shell_command_executor.py --no-derived --env-dict '{"TEST": "abc", "TEST2": "bdc"}'
