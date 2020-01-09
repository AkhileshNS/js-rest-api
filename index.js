// IMPORTS
const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('go to /hello');
});

app.get('/hello', (req, res) => {
  res.send('world of nodejs');
});

app.listen(port, () => console.log('Listening on port ' + port));
