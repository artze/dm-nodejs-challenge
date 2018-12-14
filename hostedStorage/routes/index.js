const apiRoutes = require('./apiRoutes');
const errorHandler = require('../middleware/errorHandler');

function init(app) {

    app.use('/api', apiRoutes);

    app.use(errorHandler);
    
}

module.exports = {
    init
}