const axios = require('axios');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const iconv = require('iconv-lite');
const sqlite3 = require('sqlite3').verbose();
const { name } = require('../config/database');
const db = new sqlite3.Database(name);

let options = {
	headers: {
		'user-agent':
			'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:122.0) Gecko/20100101 Firefox/122.0',
	},
	responseType: 'arraybuffer',
};

module.exports = class Solutions {
	constructor(data) {
		this.data = data;
	}

	async #initParse({ rowid, url, name, location, lastChanged }) {
		async function request(url) {
			try {
				let { data } = await axios.get(url, options);
				data = iconv.decode(Buffer.from(data), 'win1251');
				return data;
			} catch (e) {
				console.log(e);
			}
		}

		function setCourtData(parsedCourtName) {
			const index = parsedCourtName.indexOf('г.');
			const nameToUpdate =
				index !== -1 ? parsedCourtName.slice(0, index).trim() : parsedCourtName;
			const locationToUpdate =
				index !== -1 ? parsedCourtName.slice(index + 2).trim() : null;
			const lastChangedToUpdate = new Date().toLocaleDateString();

			if (
				name === nameToUpdate &&
				location === locationToUpdate &&
				lastChanged === lastChangedToUpdate
			) {
				return;
			}

			if (rowid) {
				try {
					db.run(
						`UPDATE courts SET name = ?, location = ?, lastChanged = ? WHERE rowid = ?`,
						[nameToUpdate, locationToUpdate, lastChangedToUpdate, rowid]
					);
				} catch (e) {
					console.log(e, nameToUpdate);
				}
			}
		}

		function getTableRows(table) {
			if (!table.children.length) return;

			const rows = [];

			for (const row of table.children) {
				if (!row.vAlign) continue;

				const td = row.children[0].textContent;
				if (!td.includes('2-')) continue;

				rows.push(row.children);
			}

			return rows;
		}

		function getCellData(rows) {
			if (!rows.length) return [];

			const solutions = [];

			const transform = str => str.replace(/[\n\t]/g, '').trim();
			const getHuman = (arr, value) => {
				const str = arr.find(str => str.includes(value)) || '';
				const i = str.indexOf(':');
				return i !== -1 ? str.slice(i + 2) : str;
			};

			for (const row of rows) {
				const [number, date, category] = row;

				const splittedCategory = category.innerHTML.split('<br>');
				const data = {
					number: number.textContent,
					date: transform(date.textContent),
					plaintiff: transform(getHuman(splittedCategory, 'ИСТЕЦ')),
					defendant: transform(getHuman(splittedCategory, 'ОТВЕТЧИК')),
				};

				solutions.push(data);
			}

			return solutions;
		}

		function saveSolutions(arrayData, rowid) {
			if (!arrayData.length) return;

			const dateAdded = new Date().toLocaleDateString();
			for (const row of arrayData) {
				try {
					db.run('INSERT OR IGNORE INTO solutions VALUES(?,?,?,?,?,?)', [
						row.number,
						row.date,
						row.plaintiff,
						row.defendant,
						rowid,
						dateAdded,
					]);
				} catch (e) {
					console.log(e);
				}
			}
			console.log('Код выполнился');
		}
		const code = await request(url);

		if (!code) return;

		const dom = new JSDOM(code);
		const parsedCourtName = dom.window.document.querySelector('h5').textContent;
		setCourtData(parsedCourtName);

		const table = dom.window.document.querySelector('table#tablcont tbody');

		const rows = getTableRows(table);

		const arrayData = getCellData(rows);

		saveSolutions(arrayData, rowid);
	}
	init(courtsList) {
		const result = courtsList.map(court => {
			this.#initParse(court);
		});
	}
};
