const mysql = require('mysql');
const express = require('express');
const secrets = require('./secrets')

const app = express();

const connection = mysql.createConnection({
  host: secrets.HOST,
  user: secrets.USER,
  password: secrets.PASSWORD,
  database: secrets.DB_NAME,
});

connection.connect();

let data = {};

connection.query('SELECT * FROM marshfield ORDER BY ID DESC LIMIT 1', (error, results) => {
  if (error) {
    console.error(`error connecting: ${error.stack}`);
    return;
  }
  [data] = results;
});

app.get('/', (req, res) => {
  res.json(data);
});

connection.end();
app.listen(3000, () => console.log('app listening on port 3000'));
