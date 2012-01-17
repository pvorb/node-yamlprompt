var yp = require('./yamlprompt.js');
var rl = require('readline').createInterface(process.stdin, process.stdout);
rl.setPrompt('> ', 2);

yp(rl, function (err, obj) {
  if (err)
    throw err;
  console.log(obj);
});
