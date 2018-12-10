#!/usr/bin/python
import sys

def reibniz_pow(i):
  return pow(-1, i) / (2 * i + 1)

def leibniz(n):
  r = 0
  for i in range(n):
    r += reibniz_pow(i)
  return 4 * r

leibniz(int(sys.argv[1]))
