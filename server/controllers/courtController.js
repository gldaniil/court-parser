const Courts = require('../models/court');

exports.addUrl = (req, res) => {
	const { url, court } = req.body;
	const courtData = new Courts(url, court);
	courtData.add(res);
};
exports.getUrls = (_, res) => {
	Courts.get(res);
};
