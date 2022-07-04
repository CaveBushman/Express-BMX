const mongoose = require("mongoose");

const clubSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    companyNumber: Number,

    region: {
        type: String,
        required: true,
    },
  
    street: String,
    city: String, 
    zip: Number, 
  
    contactPerson: String,
    contactEmail: String,
    contactPhone: String,

    bankAccount: String,

    web: String,
    facebook: String,
    instagram: String,

    map: String,
    qrCodeForMap: String,

isActive:Boolean,

    dateCreated: {
        type: Date,
        default: Date.now,
    },
});

const Club = mongoose.model("Club", clubSchema);

module.exports = Club;
