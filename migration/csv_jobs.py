#!/usr/bin/env python
# -*- coding: utf-8 -*-

import csv
import os
from pprint import pprint
# 'Blog_ID',
# 'Author',
# 'Title',
# 'Permalink',
# 'Category_ID',
# 'Content',
# 'Read_Times',
# 'Post_Date',
# 'Visibility',
# 'Record_State'


BLOG_CONTENT = """
title: {1}
categories: {2}
tags: {3}
permalink: {4}
# canonical_url: {5}

{5}
"""

blogs = []
with open('/Users/yewe/Documents/blogs.csv', 'r') as csv_file:
    csv_reader = csv.reader(csv_file)

    counter = 0
    for row in csv_reader:
        # print('{}: {}'.format(row[0], row[1]))
        if row[0] == 'Blog_ID':
            pprint(row)
        else:
            counter += 1
            if counter == 3:
                break

            if row[8] == '1' and row[9] == 'A':
                date_str = row[7]
                date_str = [0:date_str.index(' ')]
                title = row[2]
                blog_file = '/Users/yewe/projects/wayneye.github.io/_posts/' + date_str + '-' + title + '.md'
                pprint(row)
            # blogs.append(['Service Name', 'Subscribers Count'])
    # pprint(blogs)


# Write CSV file
# with open('/Users/yewe/Desktop/all_subscribers_count.csv', 'w', newline='') as csvoutput:
    # writer = csv.writer(csvoutput)
    # for row in blogs:
    # writer.writerows(blogs)

