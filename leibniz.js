#!/usr/bin/node
function leibnizPow(i) {
  return Math.pow(-1, i) / (2 * i + 1);
}

function leibniz(n) {
  var r = 0;
  for (var i = 0; i < n; i++) {
    r += leibnizPow(i);
  }
  return 4 * r;
}

console.log(leibniz(parseInt(process.argv[2])));
