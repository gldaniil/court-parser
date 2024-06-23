const urls = ['Success result!'];

module.exports = class Url {
	constructor(url, court) {
		this.url = url;
		this.court = court;
	}
	add() {
		urls.push(this.url);
		return urls;
	}
	static get() {
		return urls;
	}
};
