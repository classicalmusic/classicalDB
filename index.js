var express = require('express');
var bodyParser = require('body-parser');
var pg = require('pg');


process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var logger = require('morgan');

var app = express();
app.set('port', (process.env.PORT || 5000))
app.set('db', require('./models'));

//Load Middleware
app.use(express.static(__dirname + '/public')); //Serve static files
app.use(logger('short')); //Log all requests except static file requests
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json

//API Route Handling
// app.get('/api/userCheck', handlers.userCheck);
// app.get('/api/fetchData', handlers.fetchData);

// app.listen(app.get('port'), function() {
//   console.log("Node app is running at localhost:" + app.get('port'))
// });

var client = new pg.Client({
    user: "navzazhiolexqn",
    password: "mJAmrmCj6t3vfvtJqKkmlUP9-W",
    database: "d563p91di2mbts",
    port: 5432,
    host: "ec2-54-204-43-138.compute-1.amazonaws.com",
    ssl: true
});

db.sequelize.sync({force: true}).complete(function(err) {
  if (err) {
    throw err[0]
  } else {
    http.createServer(app).listen(app.get('port'), function () {
      console.log('Express working and listening');
    });
  };
});