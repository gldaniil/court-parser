const express = require('express')
const urlController = require('../controllers/urlController')
const urlRouter = express.Router()

urlRouter.use('/add', urlController.addUrl)
urlRouter.use('/', urlController.getUrls)

module.exports = urlRouter
