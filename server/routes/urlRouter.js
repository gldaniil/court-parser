const express = require('express');
const urlController = require('../controllers/urlController');
const urlRouter = express.Router();

urlRouter.get('/', urlController.getUrls);
urlRouter.post('/', urlController.addUrl);

module.exports = urlRouter;
