const router = require("express").Router();
const posts = require("../controllers/posts.controller.js");

// Create a new Tutorial
router.post("/", posts.create);

// Retrieve all Tutorials
router.get("/", posts.findAll);

// Retrieve a single Tutorial with id
router.get("/:id", posts.find);

// Update a Tutorial with id
router.put("/:id", posts.update);

// Delete a Tutorial with id
router.delete("/:id", posts.delete);

module.exports = router;
