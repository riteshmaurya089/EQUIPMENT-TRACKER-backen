const express = require("express");
const Equipment = require("../models/Equipment");

const router = express.Router();

// GET all equipment
router.get("/", async (req, res) => {
  const equipment = await Equipment.find();
  res.json(equipment);
});

// ADD new equipment
router.post("/", async (req, res) => {
  const equipment = new Equipment(req.body);
  const saved = await equipment.save();
  res.status(201).json(saved);
});

// UPDATE equipment
router.put("/:id", async (req, res) => {
  const updated = await Equipment.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
});

// DELETE equipment
router.delete("/:id", async (req, res) => {
  await Equipment.findByIdAndDelete(req.params.id);
  res.json({ message: "Equipment deleted" });
});

module.exports = router;
