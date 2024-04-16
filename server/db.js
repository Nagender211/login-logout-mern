const mongoose = require("mongoose");

module.exports = () => {
	const connectionParams = {
		
	};
	try {
		mongoose.connect(process.env.MONGO_URL, connectionParams);
		console.log("Connected to database successfully");
	} catch (error) {
		console.log(error);
		console.log("Could not connect database!");
	}
};
