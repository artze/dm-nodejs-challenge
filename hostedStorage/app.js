const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3000

app.use(bodyParser.json());
app.use(morgan('dev'));

app.listen(port, function() {
	console.log(`Express running on ${port}`)
})
