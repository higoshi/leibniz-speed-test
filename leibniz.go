package main

import "fmt"
import "math"
import "os"
import "strconv"

func LeibnizPow(i int) float64 {
	return math.Pow(-1, float64(i)) / (2 * float64(i) + 1)
}

func Leibniz(n int) float64  {
	r := 0.0
	for i := 0; i < n; i++ {
		r += LeibnizPow(i)
	}
	return 4 * r
}

func main() {
	if c, err := strconv.Atoi(os.Args[1]); err == nil {
		res := Leibniz(c)
		fmt.Printf("%f", res)
	}
}

