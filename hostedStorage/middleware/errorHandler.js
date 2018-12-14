function errorHandler(err, req, res, next) {
  console.log(err);
  switch (err.name) {
    case 'InvalidDataTypeError':
    res.status(400).end();
    break;

    case 'ResourceNotFoundError':
    res.status(404).end();
    break;

    default:
    res.status(500).end();
    break;
  }
}

module.exports = errorHandler;