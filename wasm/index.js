const path = require('path');
const leibniz = require('./leibniz.js');

void async function() {
  const {instance} = await leibniz.getWasm();
  console.log(instance.exports.leibniz(parseInt(process.argv[2])));
}();
