const urls = ['tete']

module.exports = class Url {
  constructor(url, court) {
    this.url = url
    this.court = court
  }
  save() {
    urls.push(this)
  }
  static get() {
    return urls
  }
}