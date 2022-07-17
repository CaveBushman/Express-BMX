const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  date: Date,

  organizer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Club",
    required: true,
  },

  rankingType: String,
  isUciEvent: {
    type: Boolean,
    default: false,
  },

  proposition: String,
  backupBEM: String,
  backupBEM2: String,
  resultXLS: String,
  resultsPDF: String,
  fastRiders: String,
  resultSeries: String,

  commissionFee: Number,

  pcp: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Commissar",
    required: true,
  },

  apcp: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Commissar",
    required: true,
  },

  eventClasses: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "EventClasses",
  },

  isRegOpen: {
    type: Boolean,
    default: false
  },
  regOpenTo: Date,

  canceled: {
    type: Boolean,
    default: false,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;