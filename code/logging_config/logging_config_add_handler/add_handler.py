#!/usr/bin/env python3

import logging.config
import os
import datetime

def add_logging_config(log_dir, log_prefix, log_level=logging.INFO):
    logger = logging.getLogger()

    log_file_path = os.path.join(
        log_dir,
        "{}.log.{}".format(log_prefix, datetime.datetime.now().strftime('%Y%m%d-%H%M%S.%f'))
    )

    log_handle = logging.FileHandler(filename=log_file_path)
    log_handle.setLevel(log_level)

    log_format = logging.Formatter("%(asctime)s %(name)s %(levelname)s %(message)s")
    log_handle.setFormatter(log_format)

    logger.addHandler(log_handle)

