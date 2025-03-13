const express = require('express');
const app = express();
const port = 3000;
const { createTables } = require('./db/tables');

app.use(express.json());

createTables();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});