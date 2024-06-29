const express = require('express');
const solutionController = require('../controllers/solutionController');
const solutionRouter = express.Router();

solutionRouter.get('/', solutionController.get);
solutionRouter.post('/', solutionController.init);

module.exports = solutionRouter;
