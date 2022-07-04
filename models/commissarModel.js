const mongoose = require("mongoose");

const commissarSchema = mongoose.Schema({
 
  commissar: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  level: String, 
  
});

exports.Commissar = mongoose.model("Commissar", commissarSchema);
