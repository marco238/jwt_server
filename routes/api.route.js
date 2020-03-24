const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const db = "mongodb://jwtuser:jwtuser1@ds135068.mlab.com:35068/jwt_db";

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

 router.get('/', (req, res) => {
    res.send('Hello from API route');
 })

 module.exports = router;