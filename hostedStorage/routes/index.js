const apiRoutes = require('./apiRoutes');

function init(app) {
    app.use('/api', apiRoutes)
}

module.exports = {
    init
}