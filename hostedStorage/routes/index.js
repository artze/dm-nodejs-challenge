const apiRoutes = require('./apiRoutes');

function init(app) {
    app.use('/', apiRoutes)
}

module.exports = {
    init
}