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

  typeOfEvent: String,
  isUCIevent: {
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

  isCanceled: {
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