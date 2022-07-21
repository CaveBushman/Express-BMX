const mongoose = require("mongoose");

const newsSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: String,
  photo: {
    type: String,
    default: "akbmx.jpeg",
  },
  photo2: String,
  onHomepage: {
    type: Boolean,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  timeToRead: Number,
  created: {
    type: Date,
    default: Date.now,
  },
  published: {
    type: Boolean, 
    default: false,
  }
});

const News = mongoose.model("news", newsSchema, "news");
module.exports = News;