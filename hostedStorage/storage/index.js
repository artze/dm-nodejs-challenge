const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

function init() {
    const adapter = new FileSync('./storage/db.json')
    const db = low(adapter)
    db.defaults({ documents: [] }).write()
}

module.exports = {
    init
}