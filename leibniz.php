<?php
function leibnizPow($i) {
  return pow(-1, $i) / (2 * $i + 1);
}

function leibniz($n)
{
  $r = .0;
  for ($i = .0; $i < $n; $i++)
  {
    $r += leibnizPow($i);
  }
  return 4.0 * $r;
}

var_dump(leibniz(intval($argv[1])));
