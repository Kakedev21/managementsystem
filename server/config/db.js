const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const response = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected to MongoDB: ${response.connection.host}`.cyan.bold);
  } catch (error) {
    console.log(`Error connecting to MongoDB: ${error}`.red.bold);
    process.exit(1);
  }
};

module.exports = connectDb;
