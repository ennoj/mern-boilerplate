const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

///// LINKS ROUTE /////
const links = require('./routes/api/links');

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

///// USE ROUTES /////
app.use('/api/links', links);

///// START SERVER /////
const port = process.env.port || 5000;
app.listen(port, () =>
  console.log(`***** SERVER STARTED ON PORT ${port} *****`)
);
