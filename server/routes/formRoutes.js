const express = require("express");
const FormData = require("../models/FormData");
const router = express.Router();

router.post("/submit", async (req, res) => {
  try {
    const formData = new FormData(req.body);
    await formData.save();
    res.status(201).json({ message: "Form Data Saved Successfully!" });
  } catch (err) {
    res.status(500).json({ error: "Failed To Save Data" });
  }
});

module.exports = router;
