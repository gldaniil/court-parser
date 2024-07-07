const express = require('express');
const cors = require('cors');
const { createServer } = require('http');

const courtRouter = require('./routes/courtRouter');
const solutionRouter = require('./routes/solutionRouter');
const { initSocket } = require('./utils/socket-io');

const app = express();
const httpServer = createServer(app);
initSocket(httpServer);

app.use(cors());
app.use(express.json());

app.use('/api/courts', courtRouter);
app.use('/api/solutions', solutionRouter);

httpServer.listen(3000, () => {
	console.log('Server is running');
});
