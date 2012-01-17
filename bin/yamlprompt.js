#!/usr/bin/env node

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
    console.log(JSON.stringify(obj, null, '\t'));
  } catch (err) {
    return console.error(err);
  }
});
