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
    default: false,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

exports.News = mongoose.model("News", newsSchema);