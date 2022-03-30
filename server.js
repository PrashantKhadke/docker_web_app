'use strict';

const express = require('express');

// Constants
const EXTERNAL_PORT = process.env.EXTERNAL_PORT ? Number.parseInt(process.env.EXTERNAL_PORT) : 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.route('/api/book')
  .get((req, res) => {
    res.status(200).send('Get a random book')
  })
  .post((req, res) => {
    res.status(200).send('Add a book')
  })
  .put((req, res) => {
    res.status(200).send('Update the book')
  })
  
app.listen(8080, function() {
  console.log(`🚀 Example NodeJS app listening on internal port 8080 and external port ${EXTERNAL_PORT}`);
});
//app.listen(PORT, HOST);
//console.log(`Running on http://${HOST}:${PORT}`);
