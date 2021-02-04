const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use('/api', require('./routes/api'));
  
var server = {
  port: 8080
};

app.listen(server.port, () => console.log(`Server started, listening port: ${server.port}`));