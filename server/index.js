const express = require('express');
const cors = require('cors');
const { createServer } = require('http');
const { Server } = require('socket.io');

const courtRouter = require('./routes/courtRouter');
const solutionRouter = require('./routes/solutionRouter');

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
	cors: {
		origin: ['http://localhost:5173'],
		methods: ['GET', 'POST'],
	},
});

app.use(cors());
app.use(express.json());

app.use('/api/courts', courtRouter);
app.use('/api/solutions', solutionRouter);

io.on('connection', socket => {
	socket.emit('connect_result', 'Success connect | Server');

	socket.on('connect_result', msg => {
		console.log(msg);
	});
});

httpServer.listen(3000, () => {
	console.log('Server is running');
});
