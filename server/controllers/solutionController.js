const Solutions = require('../models/solution');

exports.get = (req, res) => {
	res.send('Success get-fn');
};
exports.init = (req, res) => {
	const data = JSON.parse(req.body.data);
	if (data && data.length !== 0) {
		res.sendStatus(200);
	} else res.status(400).send('Data type error');

	const solutionData = new Solutions();
	solutionData.init(data);
};
