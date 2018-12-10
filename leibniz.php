<?php
function leibnizPow($i) {
  return (-1 ** $i) / (2 * $i + 1);
}

function leibniz($n)
{
  $r = 0;
  for ($i = 0; $i < $n; $i ++)
  {
    $r += leibnizPow($i);
  }
  return $r;
}

leibniz(intval($argv[1]));
