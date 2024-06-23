const sqlite3 = require('sqlite3').verbose();
const { name } = require('../config/database');
const db = new sqlite3.Database(name);

module.exports = class Courts {
	constructor(url, court) {
		this.url = url;
		this.court = court;
	}
	add(res) {
		db.run(
			`INSERT INTO courts VALUES(?,?,?)`,
			[this.url, this.court, null],
			function (err) {
				if (err) {
					res.send(err.message);
					return console.log(err.message);
				}
				// get the last insert id
				console.log(`A row has been inserted with rowid ${this.lastID}`);
				res.send('Success');
			}
		);
	}
	static get() {
		return 'ответ на get';
	}
};
