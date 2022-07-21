const mongoose = require("mongoose");

const resultSchema = mongoose.Schema({

    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
        require: true
    },
    
    rider: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Rider",
        require: true
    },

    category: String,
    place: Number,
    points: Number,
    is_20: {
        type: Boolean,
        default: false
    },
    marked: {
        type: Boolean,
        default: false
    },
});

exports.Result = mongoose.model("Result", resultSchema);
