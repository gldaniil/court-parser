module.exports = class Solutions {
	constructor(data) {
		this.data = data;
	}
	#initParse() {
		console.log('Initialization success');
	}
	init(courtsList) {
		console.log(courtsList);
		this.#initParse();
	}
};
