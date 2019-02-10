require('rootpath')();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const errorHandler = require('./helpers/error-handler');

const userRoutes = require('./core/routes/user');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.use('/user', userRoutes);

app.use(errorHandler);

const port = process.env.PORT || 4000;

const server = app.listen(port, () => console.log('Server listening on port ' + port))