import express from "express";
import cors from "cors";
import "./loadEnvironment.js";
import mongoose from "mongoose";
import items from "./routes/items.js";
import data from "./routes/generate-data.js"
import "./loadEnvironment.js";

const PORT = process.env.PORT || 5050;
const app = express();

const corsOptions = {
  origin: "https://storage-manager.onrender.com",
}

app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Success");
});

app.use("/items", items);

const connectionString = process.env.DB_URI || "";
await mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to database");

    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });


  })
  .catch((error) => {
    console.error(error);
    throw new Error("Failed to connect to the database.");
  });

app.get("/", (req, res) => {
  res.status(200).json({message: "Connected to backend!"})
})
