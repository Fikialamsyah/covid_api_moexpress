// TODO 5: SETUP MODEL
// import mongoose 
const mongoose = require('mongoose');

// import db
const db = require("../config/database");

// create schema
const schemaPatient = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['Positive', 'Negative', 'Dead'],
        required: true
    },
    in_date_at: {
        type: Date,
        required: true,
    },
    out_date_at: {
        type: Date,
        required: true
    },
}, {timestamp: true});

const Patient = db.model('Patients', schemaPatient);

// export model
module.exports = Patient;