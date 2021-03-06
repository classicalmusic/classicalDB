/**
* Main application routes
*/

'use strict';

module.exports = function(app) {

  // API Routes
  app.use('/api/labels', require('./api/labels'));

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
  .get(function(req, res){
    res.sendStatus(404);
  });

  // All other routes should redirect to the index.html
  app.route('/*')
  .get(function(req, res) {
    res.sendFile(app.get('appPath') + '/index.html');
  });
};
