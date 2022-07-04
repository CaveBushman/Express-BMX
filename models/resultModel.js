const mongoose = require("mongoose");

const resultSchema = mongoose.Schema({

    event: {

    },
    name: String, 
    date: Date,
    event_type: String, 
    organizer: {
        
    },
    rider: {

    },
    club: {

    },
    category: String,
    place: Number,
    points: Number,
    is_20: {
        type: Boolean,
        default: false
    },
    marked_20: Number,
    marked_24: Number,

});

exports.Result = mongoose.model("Result", resultSchema);
