const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();


router.post("/register", async (req, res) => {
  const { name, dob, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, dob, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ status:200,message: "User registered successfully", data:newUser });
  } catch (err) {
    res.status(400).json({ error: "User already exists or invalid data" });
  }
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, "secret", { expiresIn: "1h" });
    res.status(200).json({ token, message: "Login successful" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
