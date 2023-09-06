const express = require("express");
const postsRouter = require("./routes/posts.routes.js");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/messages", (req, res) => {
  res.json({ message: "Test" });
});

app.use("/api/posts", postsRouter);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
