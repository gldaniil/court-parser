const { Server } = require('socket.io');

let io;

exports.initSocket = httpServer => {
	io = new Server(httpServer, {
		cors: {
			origin: ['http://localhost:5173'],
			methods: ['GET', 'POST'],
		},
	});

	io.on('connection', socket => {
		socket.emit('connect_result', 'Success connect | Server');

		socket.on('connect_result', msg => {
			console.log(msg);
		});
	});
};

exports.sendSolution = row => {
	io.emit('solution:get', row);
};
