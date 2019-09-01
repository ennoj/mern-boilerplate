const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

///// BOSYPARSER MIDDLEWARE /////
app.use(bodyParser.json());

///// DB CONFIG /////
const db = require('./config/keys').mongoURI;

///// CONNECT DB /////
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('***** MONGODB CONNECTED *****'))
  .catch(err => console.log(err));

///// START SERVER /////
const port = process.env.port || 5000;
app.listen(port, () =>
  console.log(`***** SERVER STARTED ON PORT ${port} *****`)
);
