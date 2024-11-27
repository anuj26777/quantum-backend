const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();


app.use(bodyParser.json());
app.use(cors());


mongoose.connect(
  "mongodb+srv://anuj26777:57pCXu4E.neLN9@cluster0.jsuiz.mongodb.net/userQuantum?retryWrites=true&w=majority"
)



  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));





const PORT = 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

