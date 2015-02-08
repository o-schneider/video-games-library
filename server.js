var express = require('express');

var appPath = 'www';
var app = express();

app.use(function(req, res, next) {
  console.log(req.method, req.url);
  next();
});

app.use("/", express.static(appPath));
app.listen(3000);
