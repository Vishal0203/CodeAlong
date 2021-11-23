const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const hello = require('./controllers/hello.controller');
const app = express();
const port = 8000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/greet', hello);

app.listen(port, () => {
  console.log(`Code along server listening at http://localhost:${port}`);
});
