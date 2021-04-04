// Load Node modules
var express = require('express');
// Initialise Express
var app = express();
// Render static files
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname + '/public/'});
});
// Port website will run on
app.listen(process.env.PORT || 8080)