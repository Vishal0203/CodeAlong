const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const helloController = require('./controllers/hello.controller');
const colorsController = require('./controllers/colors.controller');

const app = express();
const port = 8000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/greet', helloController);
app.use('/colors', colorsController);

app.listen(port, () => {
  console.log(`Code along server listening at http://localhost:${port}`);
});
