const router = require("express").Router();
const posts = require("../controllers/posts.controller.js");

// Create a new Tutorial
router.post("/", () => {
  console.log("POST Request");
});

// Retrieve all Tutorials
router.get("/", posts.findAll);

// Retrieve a single Tutorial with id
router.get("/:id", () => {
  console.log("GET Request");
});

// Update a Tutorial with id
router.put("/:id", () => {
  console.log("PUT Request");
});

// Delete a Tutorial with id
router.delete("/:id", () => {
  console.log("DELETE Request");
});

module.exports = router;
