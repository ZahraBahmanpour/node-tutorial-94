const express = require("express");
const postsRouter = require("./routes/posts.routes.js");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = require("./models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "blog",
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

app.get("/messages", (req, res) => {
  res.json({ message: "Test" });
});

app.use("/api/posts", postsRouter);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
