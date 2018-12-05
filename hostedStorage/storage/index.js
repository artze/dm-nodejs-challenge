const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('./storage/db.json')
const db = low(adapter)

function init() {
    db.defaults({ documents: [] }).write()
}

module.exports = {
    init,
    db
}