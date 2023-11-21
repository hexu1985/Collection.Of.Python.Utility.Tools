#!/usr/bin/env python3

import logging
from logging_config import init_logging_config
from add_handler import add_logging_config


init_logging_config('.', 'init_log', logging.DEBUG)
LOGGER = logging.getLogger()
LOGGER.debug("hello debug")
LOGGER.info("hello info")
add_logging_config('.', 'add_log', logging.DEBUG)
LOGGER.error("hello error")
LOGGER.warning("hello warning")
