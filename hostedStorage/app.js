const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const storage = require('./storage')
const routes = require('./routes');

const app = express();
const port = process.env.PORT || 3000

storage.init();
app.use(bodyParser.json());
app.use(morgan('dev'));

routes.init(app);

app.listen(port, function() {
	console.log(`Express running on ${port}`)
})
