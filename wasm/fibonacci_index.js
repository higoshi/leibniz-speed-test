const path = require('path');
const fibonacci = require('./fibonacci.js');

void async function() {
  const {instance} = await fibonacci.getWasm();
  console.log(instance.exports.fibonacci(parseInt(process.argv[2])));
}();
