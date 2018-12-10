#!/usr/bin/ruby

def leibnizPow(i)
  return (-1 ** i) / (2 * i - 1)
end

def leibniz(n)
  i = 0
  r = 0
  while i < n do
    i += 1
    r += leibnizPow(i)
  end
  return r
end

leibniz($*[0].to_i)
