const express = require("express");
const router = express.Router();
const Techstar = require("../Models/techstars");

router.get("/", async (req, res) => {
  try {
    const entitties = await Techstar.find();
    res.status(200).json(entitties);
  } catch (error) {}
});
router.get("/:id", async (req, res) => {
  try {
    const entity = await Techstar.findById(req.params.id);
    if (entity != null) {
      res.status(200).json(entity);
    }
    if (entity == null) {
      res.status(401).json(entity);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const techie = await Techstar.findById(req.params.id);
    techie.fullname = req.body.fullname;
    const result = await techie.save();
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const techie = await Techstar.findById(req.params.id);

    const result = await techie.delete();
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/", async (req, res) => {
  const techie = new Techstar({
    fullname: req.body.fullname,
    experience: req.body.experience,
    location: req.body.location,
    availability: req.body.availability,
    tech: req.body.tech,
  });
  try {
    const entity = await techie.save();
    res.status(201).send("successfully created");
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
