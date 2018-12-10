#!/usr/bin/ruby
def leibnizPow(i)
  return (-1.0 ** i) / (2.0 * i + 1.0)
end

def leibniz(n)
  i = 0.0
  r = 0.0
  while i < n do
    i += 1.0
    r += leibnizPow(i)
  end
  return 4.0 * r
end

print(leibniz($*[0].to_i * 1.0))
