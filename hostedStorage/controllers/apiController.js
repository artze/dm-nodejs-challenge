const db = require('../storage').db;

function storeData(req, res, next) {
    res.status(200).end('done')
}

module.exports = {
    storeData
}