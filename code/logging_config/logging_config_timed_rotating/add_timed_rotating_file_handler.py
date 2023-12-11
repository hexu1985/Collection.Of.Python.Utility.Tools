#!/usr/bin/env python3

import logging
import datetime
import pathlib

def add_timed_rotating_file_handler(log_dir, log_prefix, 
        when='D', interval=1, backupCount=3,
        log_level=logging.INFO, logger_name=None):
    log_dir_path = pathlib.Path(log_dir)
    log_dir_path.mkdir(parents=True, exist_ok=True)

    log_file_path = log_dir_path/"{}.log.{}".format(log_prefix, 
            datetime.datetime.now().strftime('%Y%m%d-%H%M%S.%f'))

    log_handle = logging.handlers.TimedRotatingFileHandler(
            filename=str(log_file_path),
            when=when, interval=interval, backupCount=backupCount
            )
    log_handle.setLevel(log_level)

    log_format = logging.Formatter("%(asctime)s %(name)s %(levelname)s %(message)s")
    log_handle.setFormatter(log_format)

    logger = logging.getLogger(logger_name)
    logger.addHandler(log_handle)

