'use strict';

const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.static('./public'));

// get port number from .env
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
