var fs = require('fs');
var file = __dirname + '/picards.json';

fs.readFile(file, 'utf8', function (err, data) {
  if (err) {
    console.log('Error: ' + err);
    return;
  }
  data = JSON.parse(data);
  element = data[Math.floor(Math.random() * data.length)];
  console.log(element);
  return;
});