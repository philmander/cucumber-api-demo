const express = require('express');
const vacanciesRouter = require('./vacancy/vacancy-routes.js');

const app = express();

app.use('/api', vacanciesRouter);

app.listen(3000, () => { console.log('Server running at http://localhost:3000')});