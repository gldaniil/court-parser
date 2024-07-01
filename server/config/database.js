const sqlite3 = require('sqlite3').verbose();
const handlingErrors = require('../utils/handlingErrors');
const name = './server/config/data.db';

const db = new sqlite3.Database(name, err => {
	handlingErrors(err, 'Успешное подключение к базе данных SQLite.');
});

db.serialize(() => {
	db.run(
		`CREATE TABLE IF NOT EXISTS solutions (
      number TEXT,
      date TEXT,
      plaintiff TEXT,
      defendant TEXT,
      court_id INTEGER,
      dateAdded TEXT,
			UNIQUE(number, date, plaintiff, court_id))`,
		err =>
			handlingErrors(err, 'Таблица solutions создана, либо уже существует.')
	),
		db.run(
			`CREATE TABLE IF NOT EXISTS courts (
      url TEXT NOT NULL UNIQUE,
      name TEXT,
			location TEXT,
      lastChanged TEXT)`,
			err => handlingErrors(err, 'Таблица courts создана, либо уже существует.')
		);
});
db.close(err => {
	if (err) console.log('Возникла ошибка:', err);
	console.log('Соединение с БД закрыто.');
});

module.exports = {
	db,
	name,
};
