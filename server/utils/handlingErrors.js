const { error, log } = require("console")

const handlingErrors = (err, msg) => {
  if (err) error(err.message)
  else log(msg)
}

module.exports = handlingErrors