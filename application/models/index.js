const fs = require('fs');
const path = require('path');
const basename = path.basename(module.filename);

let modelTypes = []

fs
  .readdirSync(__dirname)
  .forEach(function(file) {
    if (file !== basename && file.slice(-3) === '.js') {
      modelTypes.push(file.slice(0, -3).toLocaleLowerCase())
    }
  })

module.exports = {
  modelTypes
}