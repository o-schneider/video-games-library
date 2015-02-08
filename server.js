var express = require('express');
var browserify = require('browserify-middleware');
var sassMiddleware = require('node-sass-middleware');


var appPath = __dirname + '/www';
var jsPath = appPath + '/app';
var stylePath = appPath + '/styles';

var sassOpts = {
  src: stylePath,
  dest: stylePath,
  debug: true,
  outputStyle: 'expanded'
};

var app = express();


app.use(function(req, res, next) {
  console.log(req.method, req.url);
  next();
});

app.use('/styles', sassMiddleware(sassOpts));
app.use('/js', browserify('./www/app'));
app.use('/', express.static(appPath));

app.listen(3000);
