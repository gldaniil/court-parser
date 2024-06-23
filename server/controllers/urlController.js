const Url = require('../models/url');

exports.addUrl = (req, res) => {
	const { url, count } = req.body;
	const addingUrl = new Url(url, count);
	res.send(addingUrl.add());
};
exports.getUrls = (req, res) => {
	res.send(Url.get());
};
