#!/usr/bin/env python3

import logging
import time
from logging_config_timed_rotating import init_logging_config
from add_timed_rotating_file_handler import add_timed_rotating_file_handler

if __name__ == '__main__':
    init_logging_config('.', 'test', logging.DEBUG, when='S', interval=3, backupCount=3)
    LOGGER = logging.getLogger()
    LOGGER.info("hello info")
    LOGGER.error("hello error")
    LOGGER.warning("hello warning")
    for i in range(5):
        if i == 0:
            add_timed_rotating_file_handler(
                    log_dir='.', log_prefix='new_test',
                    when='S', interval=3, backupCount=3)
        LOGGER.info("i is {}".format(i))
        LOGGER.info("hello info")
        LOGGER.error("hello error")
        LOGGER.warning("hello warning")
        time.sleep(3.0)
