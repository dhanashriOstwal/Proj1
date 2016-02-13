/* var cool = require('cool-ascii-faces'); */
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.use('/bower_components', express.static(__dirname + '/bower_components'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.get('/', function(request, response) {
  response.render('pages/index');
  /* Handling the AngularJS get request*/
    console.log(request.body);
    response.setHeader('Content-Type', 'application/json');
    /*response has to be in the form of a JSON*/
    request.body.serverMessage = "NodeJS replying to angular"
        /*adding a new field to send it to the angular Client */
    response.end(JSON.stringify(request.body));
    /*Sending the respone back to the angular Client */
	res.sendFile(__dirname + '/Name.html');
});
/*
app.get('/cool', function(request, response) {
  response.send(cool()); 
});
*/
/*to access the posted data from client using request body
app.get('/', function (req, res) {
    /* Handling the AngularJS get request
    console.log(req.body);
    res.setHeader('Content-Type', 'application/json');
    /*response has to be in the form of a JSON
    req.body.serverMessage = "NodeJS replying to angular"
        /*adding a new field to send it to the angular Client 
    res.end(JSON.stringify(req.body));
    /*Sending the respone back to the angular Client 
});
 
*/

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


