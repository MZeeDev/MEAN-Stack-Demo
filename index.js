const express = require('express');
const app = express();
const router = require('./router');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('./mongoose');

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

app.use('/api', router);
app.use(express.static('static'));

app.use(function(req, res) {
	const err = new Error('Not Found');
	err.status = 404;
	res.json(err);
});

let port = process.env.PORT || 3000;

app
	.listen(port, function() {
		console.log(`Listening at port ${port}`);
	})
	.on('error', function(error) {
		console.log(error);
	});
