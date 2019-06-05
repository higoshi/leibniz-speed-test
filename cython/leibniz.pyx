#!/usr/bin/python
import sys

def reibniz_pow(i):
  return pow(-1.0, i) / (2.0 * i + 1.0)

def leibniz(n):
  r = 0.0
  for i in range(n):
    r += reibniz_pow(i)
  return 4.0 * r

