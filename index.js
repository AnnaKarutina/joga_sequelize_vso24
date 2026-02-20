const express = require('express');
const { connect } = require('./utils/db');

const app = express();


connect()

app.listen(3026, () => {
    console.log(`Server is running on port 3026`);
  });