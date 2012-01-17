#!/usr/bin/env node

var yamlprompt = require('../yamlprompt.js');
var rl = require('readline').createInterface(process.stdin, process.stderr);

yamlprompt(rl, function (err, obj) {
  rl.close();
  process.stdin.destroy();
  if (err)
    return console.error(err);
  try {
    console.log(JSON.stringify(obj));
  } catch (err) {
    return console.error(err);
  }
});
