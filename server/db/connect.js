const mongoose = require("mongoose");

const connectionString = process.env.DB_URI || "";

console.log("connection string", connectionString);

const connectMongoDB = async () => {
  try {
    await mongoose
      .connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true, // for mongoose 6.x
        useFindAndModify: false, // for mongoose 6.x
      })
      .then(() => {
        console.log("Connected to mongoDB");
      })
      .catch((err) => {
        console.log("mongoDB connection error ", err.message);
      });
  } catch (err) {
    console.log("database connection error ", err.message);
  }
};

module.exports = connectMongoDB;
