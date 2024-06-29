const express = require('express');
const cors = require('cors');
const courtRouter = require('./routes/courtRouter');
const solutionRouter = require('./routes/solutionRouter');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/courts', courtRouter);
app.use('/api/solutions', solutionRouter);

app.listen(3000, () => {
	console.log('Server is running');
});
