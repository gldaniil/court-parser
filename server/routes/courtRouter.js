const express = require('express');
const courtController = require('../controllers/courtController');
const courtRouter = express.Router();

courtRouter.get('/', courtController.getUrls);
courtRouter.post('/', courtController.addUrl);

module.exports = courtRouter;
