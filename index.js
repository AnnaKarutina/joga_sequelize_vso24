const express = require('express');
const { connect } = require('./utils/db');

const app = express();
app.use(express.json());

const articleRoutes = require('./routes/article');
const authorRoutes = require('./routes/author');
app.use('/', articleRoutes);
app.use('/author', authorRoutes);

app.listen(3026, () => {
    console.log(`Server is running on port 3026`);
});