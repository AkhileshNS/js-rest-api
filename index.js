// IMPORTS
const express = require('express');

const app = express();

app.get('/hello', (req, res) => {
  res.send('world of nodejs');
});

app.listen(5000, () => console.log('Listening on port 5000:'));
