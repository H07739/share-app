const express = require('express');
const logger = require('./middlewares/logger');
const { er, notfound } = require('./middlewares/errors');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const servers = http.createServer(app);
require('dotenv').config();

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(logger);

app.use(notfound);
app.use(er);


const server = servers.listen(port, () => {
    const address = server.address();
    console.log(`Server is running at http://${address.address}:${address.port}`);
});