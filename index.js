// Load Node modules
var express = require('express');
var path = require('path');
// Initialise Express
var app = express();
// Render static files
app.use(express.static(__dirname +'/public'));
app.use(express.static('public'));
app.use(express.static('/public'));
app.use(express.static(path.join(__dirname, 'public')));
// app.get('/', (req, res) => {
//     res.sendFile('index.html', {root: __dirname + '/public/'});
// });
// Port website will run on
app.listen(process.env.PORT || 8080)