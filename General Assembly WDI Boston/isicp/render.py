#!/usr/bin/env python

import sys, re

tag_re = re.compile("(\{\{[\w@]+\}\}\n)")

tag_content = {}

with open(sys.argv[1]) as content:
  lines = [l for l in content.readlines() if l[0:2] != "@@"]
  lines = ''.join(lines)
  split = tag_re.split(lines)
  for i, s in enumerate(split):
    if re.match("@@", s):
      continue
    if tag_re.match(s):
      tag_content[s[:-1]] = split[i+1][:-1]

with open("template.html") as template:
  lines = template.readlines()
  for l in lines:
    if tag_re.match(l):
      print tag_content[l[:-1]],
    else:
      print l,
