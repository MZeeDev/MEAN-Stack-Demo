let mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const mongoConnection = process.env.MONGO_CONNECTION || 'mongodb://vis:vis12345@ds151453.mlab.com:51453/vis';
mongoose.connect(
	mongoConnection,
	{
		useNewUrlParser: true,
		useFindAndModify: false,
		useUnifiedTopology: true,
		useCreateIndex: true
	},
	(err) => {
		if (err) console.log(err);
		else console.log('Db Connected');
	}
);
module.exports = { mongoose };
