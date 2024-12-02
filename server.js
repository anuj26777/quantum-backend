const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();


app.use(bodyParser.json());
app.use(cors());






const uri = "mongodb+srv://Aarti:Aarti43@cluster0.m2anx8j.mongodb.net/userRecords?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));




const PORT = 2525;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

