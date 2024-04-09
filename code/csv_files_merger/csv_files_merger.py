#!/usr/bin/env python3

import csv
import pathlib
import logging

LOGGER = logging.getLogger()

class CsvFilesMerger:
    def __init__(self, input_dir, output_file, csv_file_prefix=""):
        self.input_dir = pathlib.Path(input_dir)
        self.output_file = output_file
        self.csv_file_prefix = csv_file_prefix
        self.output_file_handler = None
        self.csv_writer = None
        self.csv_header = None

    def get_csv_file_list(self):
        file_pattern = self.csv_file_prefix + "*.csv"
        return sorted(list(self.input_dir.glob(file_pattern)))

    def create_csv_writer(self):
        self.output_file_handler = open(self.output_file, 'w')
        self.csv_writer = csv.writer(self.output_file_handler)
        self.csv_writer.writerow(self.csv_header)

    def write_one_row(self, row):
        if self.output_file_handler is None:
            self.create_csv_writer()

        self.csv_writer.writerow(row)

    def merge_one_file(self, csv_file):
        is_header = True
        with open(csv_file) as f:
            reader = csv.reader(f)
            for row in reader:
                if is_header:
                    self.csv_header = row
                    is_header = False
                else:
                    self.write_one_row(row)

    def merge_csv_files(self):
        csv_file_list = self.get_csv_file_list()
        if len(csv_file_list) == 0:
            LOGGER.error("csv_file_list is empty!")
            LOGGER.error("input_dir: {}".format(self.input_dir))

        for csv_file in csv_file_list:
            self.merge_one_file(csv_file)
