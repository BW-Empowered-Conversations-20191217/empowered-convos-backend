const express = require('express');

const apiRouter = require('./api-router');
const usersRouter = require('../users/users-router');
const messageRouter = require('../messages/message-router');

const configureMiddleware = require('./config-middleware');

const server = express();

configureMiddleware(server);

server.use('/api', apiRouter);
server.use('/api/users', usersRouter);
server.use('/api/message', messageRouter);

module.exports = server;