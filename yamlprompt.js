// yamlprompt
;(function () {

var readline = require('readline');
var yamlparser = require('yamlparser');

function yamlprompt(prompt, cb) {
  var yaml = '';

  // create prompt
  var rl = readline.createInterface(process.stdin, process.stdout);
  rl.setPrompt(prompt, prompt.length);
  rl.on('line', function (line) {

    // try to parse yaml on '...'
    if (line.trim() == '...') {
      rl.close();
      process.stdin.destroy();
      try {
        var obj = yamlparser.eval(yaml);
        return cb(null, obj);
      } catch (err) {
        return cb(err);
      }
    }

    yaml += line + '\n';
    rl.prompt();
  });

  rl.prompt();
};

module.exports = yamlprompt;

}).call(this);
