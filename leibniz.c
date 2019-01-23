#include <stdlib.h>
#include <stdio.h>
#include <math.h>

double leibnizPow(int i) {
  return pow(-1, i) / (2 * i + 1);
}

double leibniz(int n) {
  double r = .0;
  for (int i = 0; i < n; i++) {
    r += leibnizPow(i);
  }
  return 4 * r;
}

int main(int argc, char *args[]) {
  int c = atoi(args[1]);
  double p = leibniz(c);
  printf("%1.9f \n", p);
  return 0;
}
