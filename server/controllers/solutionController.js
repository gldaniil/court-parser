const Solutions = require('../models/solution');

exports.get = (req, res) => {
	if (!req.query.id) {
		res.status(400).send('Missing parameter "id"');
	}
	const solutionData = new Solutions();
	solutionData.getById(res, req.query.id);
};
exports.init = (req, res) => {
	const data = JSON.parse(req.body.data);
	if (data && data.length !== 0) {
		res.sendStatus(200);
	} else res.status(400).send('Data type error');

	const solutionData = new Solutions();
	solutionData.init(data);
};
