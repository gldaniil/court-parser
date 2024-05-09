const Url = require("../models/url")

exports.addUrl = (req, res) => {
  res.send('Добавление суда')
}
exports.getUrls = (req, res) => {
  res.send(Url.get())
}
