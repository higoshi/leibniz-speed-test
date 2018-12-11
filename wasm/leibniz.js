const path = require('path');
const fs = require('fs');
var wasmFile = fs.readFileSync(path.resolve(__dirname, 'dest/leibniz.wasm'));

var wasm = new Uint8Array(wasmFile);

const env = {
  memoryBase: 0,
  tableBase: 0,
  memory: new WebAssembly.Memory({
    initial: 256,
  }),
  table: new WebAssembly.Table({
    initial: 0,
    element: 'anyfunc',
  }),
};

module.exports.getWasm = async () => {
  return WebAssembly.instantiate(wasm, {env});
};

