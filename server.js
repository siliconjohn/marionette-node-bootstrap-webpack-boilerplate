var express = require('express');
var compress = require('compression');

const PORT = process.env.PORT || 4000;

var app = express();

app.use(compress());
app.use(express.static('public'));

app.listen( PORT, function() {
  console.log('Server running on port ' + PORT);
});
