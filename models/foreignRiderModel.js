const mongoose = require("mongoose");

const foreignRiderSchema = mongoose.Schema({
  uciID: {
    type: Number,
    required: [true, "Rider must have a UCI ID"],
    unique: true,
  },
  firstName: {
    type: String,
    required: [true, "Rider must have a first name"],
  },
  lastName: {
    type: String,
    required: [true, "Rider must have a last name"],
  },
  dob: {
    type: Date,
    required: [true, "Rider must have a date of birth"],
  },
  girl: {
    type: Boolean,
    default: false,
  },
  girlBonus: {
    type: Boolean,
    default: false,
  },
  plate: Number,
  plateColor20: String,
  emergencyPerson: String,
  emergencyPhone: String,
  state: String,
  club: String,
  class20: String,
  class24: String,
  is20: {
    type: Boolean,
    default: false,
  },
  is24: {
    type: Boolean,
    default: false,
  },
  isElite: {
    type: Boolean,
    default: false,
  },
  transponder20: String,
  transponder24: String,

  dateCreated: {
    type: Date,
    default: Date.now,
    },
});

exports.ForeignRider = mongoose.model("ForeignRider", foreignRiderSchema);
 