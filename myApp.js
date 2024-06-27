/* require('dotenv').config()
let express = require('express');
let app = express();
let bodyParser = require('body-parser');

console.log("Hello World");

app.use((req, res, next) => {
  console.log(req.method + ' ' + req.path + ' - ' + req.ip);
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/json', function(req, res) {
  if (process.env.MESSAGE_STYLE === 'uppercase'){
    return res.json({
        "message": "HELLO JSON"
    });
  }
  res.json({
      "message": "Hello json"
  });
});

app.get('/now', function(req, res, next) {
  req.time = new Date().toString();
  next();
}, function(req, res) {
  res.send({
    time: req.time
  });
});

app.use('/public', express.static(__dirname + '/public'))

app.get('/:word/echo', function(req, res) {
  res.send({
    echo: req.params.word
  });
});

app.get('/name', function(req, res) {
  const { first, last } = req.query;
  res.send({
    name: first + ' ' + last
  });
});

app.post('/name', function(req, res) {
  const { first, last } = req.body;
  res.send({
    name: first + ' ' + last
  });
});

 module.exports = app;
*/