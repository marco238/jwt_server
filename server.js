const express = require('express');
const bodyParser = require('body-parser');

const PORT = 3001;
const api = require('./routes/api.route');
const app = express();

app.use(bodyParser.json());

app.use('/api', api);
app.get('/', function(req, res) {
  res.send('Hello from server!');
})

app.listen(PORT, function() {
  console.log('Server running on localhost:' + PORT);
})