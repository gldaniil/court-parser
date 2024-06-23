const express = require('express');
const cors = require('cors');
const courtRouter = require('./routes/courtRouter');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/courts', courtRouter);

app.listen(3000, () => {
	console.log('Server is running');
});
