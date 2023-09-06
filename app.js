const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/messages", (req, res) => {
  res.json({ message: "Test" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
