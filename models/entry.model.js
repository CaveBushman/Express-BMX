const mongoose = require("mongoose");

const entrySchema = mongoose.Schema({
  
});

exports.Entry = mongoose.model("Entry", entrySchema);
