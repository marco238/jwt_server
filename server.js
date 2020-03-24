const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

const PORT = 3001;
const api = require('./routes/api.route');
const db = "mongodb://jwtuser:jwtuser1@ds135068.mlab.com:35068/jwt_db";

//*********************** DB ************************/
const mongoClientOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

mongoose.connect(db, mongoClientOptions, err => {
  if(err) {
    console.log(err);
  } else {
    console.log('Connected to mongodb');
  }
})
//*********************** DB ************************/

app.use(bodyParser.json());

app.use('/api', api);
app.get('/', function(req, res) {
  res.send('Hello from server!');
})

app.listen(PORT, function() {
  console.log('Server running on localhost:' + PORT);
})