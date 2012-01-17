// yamlprompt
;(function () {

var readline = require('readline');
var yamlparser = require('yamlparser');

function yamlprompt(rl, cb) {
  var yaml = '';

  try {
    // create prompt
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
  } catch (err) {
    return cb(err);
  }

  rl.prompt();
};

module.exports = yamlprompt;

}).call(this);
