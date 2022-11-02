const express = require('express')
const routes = express.Router();

const sendMessage = require('./controller/sendMessage')

routes.post('/send', sendMessage.index)

module.exports = routes;