//Install express server
const express = require('express');
const path = require('path');

const app = express();
const allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

  // intercept OPTIONS method
  if ('OPTIONS' == req.method) {
    res.send(200);
  }
  else {
    next();
  }
};
// Serve only the static files form the angularapp directory
app.use(express.static(__dirname + '/angularapp'));

app.get('/*', function(req,res) {

  res.sendFile(path.join(__dirname+'/angularapp/index.html'));
});

app.configure(function () {
  app.use(allowCrossDomain);
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(application_root, "public")));
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

