#!/usr/bin/env python3

import logging.config
import os
import datetime
import time

def init_logging_config(log_dir, log_prefix, log_level=logging.INFO, interval=1, backupCount=3, when='D'):
    # logging
    LOG_FILE = os.path.join(
        log_dir,
        "{}.log.{}".format(log_prefix, datetime.datetime.now().strftime('%Y%m%d-%H%M%S.%f'))
    )
    LOGGING = {
        "version": 1,
        "disable_existing_loggers": False,
        "formatters": {
            "standard": {
                "format":
                    ("[%(levelname)s][%(asctime)s][%(threadName)s:%(thread)d]"
                     "[%(filename)s:%(lineno)d] %(message)s")
            },
        },
        "handlers": {
            "console": {
#               "level": "DEBUG",
                "level": log_level,
                "class": "logging.StreamHandler",
                "formatter": "standard"
            },
            "default": {
#               "level": "INFO",
                "level": log_level,
                "class": "logging.handlers.TimedRotatingFileHandler",
                "filename": LOG_FILE,
#                "when": 'S',
#                "interval": 3,
#                "backupCount": 3,
# when：日志文件按什么维度切分。'S'-秒；'M'-分钟；'H'-小时；'D'-天；'W'-周
                "when": when,
                "interval": interval,
                "backupCount": backupCount,
                "formatter": "standard",
                "encoding": "utf-8",
            },
        },
        "loggers": {
            "": {
                "handlers": ["console", "default"],
                "level": "DEBUG",
                "propagate": True,
            },
        },
    }
    
    logging.config.dictConfig(LOGGING)
    logging.basicConfig(level=logging.INFO)

if __name__ == '__main__':
    init_logging_config('.', 'test', logging.DEBUG, when='S', interval=3, backupCount=3)
    LOGGER = logging.getLogger()
    LOGGER.info("hello info")
    LOGGER.error("hello error")
    LOGGER.warning("hello warning")
    for i in range(5):
        LOGGER.info("hello info")
        LOGGER.error("hello error")
        LOGGER.warning("hello warning")
        time.sleep(3.0)
