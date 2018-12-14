const db = require('../storage').db;
const InvalidDataTypeError = require('../errors/InvalidDataTypeError');
const ResourceNotFoundError = require('../errors/ResourceNotFoundError');

function storeData(req, res, next) {
  
  // check if req body has 2D array
  try {
    if (!Array.isArray(req.body)) {
      throw new InvalidDataTypeError('Incoming data type is NOT Array type');
    }
    const dataIsValid = req.body.every(function(element) {
      return Array.isArray(element);
    })
    if (!dataIsValid) {
      throw new InvalidDataTypeError('Incoming data array does not have array elements')
    }
  } catch (err) {
    next(err);
    return;
  }

  req.body.forEach(dataObj => {
    db
      .get('documents')
      .push(dataObj)
      .write();
  })
  res.status(200).end('done')

}

function getData(req, res, next) {
  
  let result = db
    .get('documents')
    .value()
  
  try {
    if (result.length < 1) {
      throw new ResourceNotFoundError('Resource not found');
    }
  } catch (err) {
    next(err);
    return;
  }

  res.status(200).json(result);

}

module.exports = {
  storeData,
  getData
}
