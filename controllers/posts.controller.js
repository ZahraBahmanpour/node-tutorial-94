const db = require("../models");
const Post = db.posts;

exports.findAll = (req, res) => {
  Post.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};
