const db = require('../storage').db;

function storeData(req, res, next) {
  // check if req body is array, then insert to db
  if(Array.isArray(req.body)) {
    req.body.forEach(dataObj => {
      db
        .get('documents')
        .push(dataObj)
        .write();
    })
  } else {
    db
      .get('documents')
      .push(req.body)
      .write()
  }
  res.status(200).end('done')
}

function getData(req, res, next) {
  let result = db
    .get('documents')
    .value()
  res.status(200).json(result);
}

module.exports = {
  storeData,
  getData
}
