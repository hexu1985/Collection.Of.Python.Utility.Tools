#!/usr/bin/env python3

import sys
import pathlib
current_dir = pathlib.Path(__file__).resolve().parent

import logging
logging.basicConfig(level=logging.DEBUG)

LOGGER = logging.getLogger()

from csv_files_merger import CsvFilesMerger

input_dir = current_dir/"test_csv"
output_file = current_dir/"test.csv"

LOGGER.info("merge begin")
merger = CsvFilesMerger(input_dir=str(input_dir), output_file=output_file)
merger.merge_csv_files()
LOGGER.info("merge end")

