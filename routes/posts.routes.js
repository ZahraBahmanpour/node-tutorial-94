const router = require("express").Router();

// Create a new Tutorial
router.post("/", () => {
  console.log("POST Request");
});

// Retrieve all Tutorials
router.get("/", () => {
  console.log("GET Request");
});

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
