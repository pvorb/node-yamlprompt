#!/usr/bin/env node

if (process.argv.length >= 3) {
  var fs = require('fs');
  var path = require('path');
  var yamlparser = require('yamlparser');

  try {
    var f = fs.readFileSync(path.resolve(process.cwd(), process.argv[2]),
        'utf8');
    console.log(JSON.stringify(yamlparser.eval(f), null, '  '));
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

var yamlprompt = require('../yamlprompt.js');
process.stdin.resume();
var rl = require('readline').createInterface(process.stdin, process.stderr);
rl.setPrompt('yaml> ', 6);

yamlprompt(rl, function (err, obj) {
  rl.close();
  process.stdin.destroy();
  if (err)
    return console.error(err);
  try {
    console.log(JSON.stringify(obj, null, '  '));
  } catch (err) {
    return console.error(err);
  }
});
