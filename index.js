// Load Node modules
var express = require('express');
// Initialise Express
var app = express();
// Render static files
app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname + '/web/'});
});
// Port website will run on
app.listen(process.env.PORT || 8080)