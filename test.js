var yp = require('./yamlprompt.js');

yp('> ', function (err, obj) {
  if (err)
    throw err;
  console.log(obj);
});
