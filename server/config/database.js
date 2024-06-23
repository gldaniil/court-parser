const sqlite3 = require('sqlite3').verbose();
const handlingErrors = require('../utils/handlingErrors');
const name = './server/config/data.db';

const db = new sqlite3.Database(name, err => {
	handlingErrors(err, 'Успешное подключение к базе данных SQLite.');
});

db.serialize(() => {
	db.run(
		`CREATE TABLE IF NOT EXISTS courtCases (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      number TEXT,
      date TEXT,
      plaintiff TEXT,
      defendant TEXT,
      court TEXT,
      dateAdded TEXT)`,
		err =>
			handlingErrors(err, 'Таблица courtsCases создана, либо уже существует.')
	),
		db.run(
			`CREATE TABLE IF NOT EXISTS courts (
      url TEXT NOT NULL UNIQUE,
      court TEXT,
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
