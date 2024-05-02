const express = require('express')
const courtController = require('../controllers/courtController')
const courtRouter = express.Router()

courtRouter.use('/add', courtController.addCourt)
courtRouter.use('/', courtController.getCourts)

module.exports = courtRouter
