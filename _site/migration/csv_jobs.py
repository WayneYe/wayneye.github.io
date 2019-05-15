#!/usr/bin/env python
# -*- coding: utf-8 -*-

import csv
import os
from pprint import pprint

# Author,Category_Name,Title,Permalink,Content,Post_Date


BLOG_CONTENT = """---
title: {0}
categories:
  - {1}
tags:
  - {1}
permalink: {2}
---

{3}
"""

blogs = []
with open('/Users/yewe/Documents/blogs.csv', 'r') as csv_file:
    csv_reader = csv.reader(csv_file)

    counter = 0
    for row in csv_reader:
        # print('{}: {}'.format(row[0], row[1]))
        if row[0] == 'Author':
            pprint(row)
        else:
            # counter += 1
            # if counter == 3:
                # break

            category = row[1]
            title = row[2]
            url_safe_title = title.replace(' ', '-').replace('/', '-').replace('"', '')
            permalink = row[3] if row[3].strip() else url_safe_title
            content = row[4]
            date_str = row[5]
            date_str = date_str[0:date_str.index(' ')]
            blog_file = '/Users/yewe/projects/wayneye.github.io/_posts/' + date_str + '-' + url_safe_title + '.html'
            blog_content = BLOG_CONTENT.format(title, category, permalink, content)
            with open(blog_file, 'w') as w:
                w.write(blog_content)
            # blogs.append(['Service Name', 'Subscribers Count'])
    # pprint(blogs)


# Write CSV file
# with open('/Users/yewe/Desktop/all_subscribers_count.csv', 'w', newline='') as csvoutput:
    # writer = csv.writer(csvoutput)
    # for row in blogs:
    # writer.writerows(blogs)

