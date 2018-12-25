# leibniz-speed-test

速度比較用

```
$ time python leibniz.py 100000000
$ time node leibniz.js 100000000
$ time php leibniz.php 100000000
$ time ruby leibniz.ruby 100000000

# go
$ go build
$ ./leibniz 100000000


# wasm
$ npm install
$ npm run asc
or
$ npm install -g assemblyscript
$ asc -o wasm/dest/leibniz.wasm wasm/src/leibniz.ts

$ time node wasm/leibniz_index.js 100000000
```
