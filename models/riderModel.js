const mongoose = require("mongoose");
const Club = require("../models/clubModel");

const riderSchema = mongoose.Schema({
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
  dateOfBirth: {
    type: Date,
    required: [true, "Rider must have a date of birth"],
  },
  photo: {
    type: String, 
    default: "uni.jpg",
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
  rodneCislo: Number,
  street: String,
  city: String,
  zip: Number,
  club: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Club",
    required: true,
  },
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
  isRepre: {
    type: Boolean,
    default: false,
  },
  isTalentTeam: {
    type: Boolean,
    default: false,
  },
  point20: Number,
  point24: Number,
  ranking20: Number,
  ranking24: Number,
  transponder20: String,
  transponder24: String,
  isValid: {
    type: Boolean,
    default: false,
  },
  isApprowe: {
    type: Boolean,
    default: false,
  },
  isActive: {
    type: Boolean,
    default: false,
    },
  dateCreated: {
    type: Date,
    immutable: true, 
    default: Date.now,
    },
});

const Rider = mongoose.model("Rider", riderSchema);

module.exports = Rider;
 