module.exports = (mongoose) => {
  const schema = mongoose.Schema(
    {
      title: String,
      body: String,
    },
    { timestamps: true, versionKey: false }
  );

  const Posts = mongoose.model("posts", schema);
  return Posts;
};
