const mongoose = require('mongoose');

exports.connectMongoose = () => {
	mongoose.connect(<your connection string>).then(e=>console.log(`connected to mongodb: ${e.connection.host}`)).catch(e => console.log(e));
}



const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	username: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true,
	},
	country: {
		type: String,
		required: true
	},
	pincode: {
		type: Number,
		required: true
	},
	streetAddress: {
		type: String,
		required: true
	}
})

exports.User = mongoose.model("User", userSchema);
