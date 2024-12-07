const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name: { type: String, required: true },  // Ensuring the name is required
    email: { 
        type: String, 
        required: true, 
        unique: true,
        match: [/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 'Please enter a valid email address']
    },
    password: { type: String, required: true },
    score: [
        {
            matchName: { type: String, required: true },
            batting: {
                runsmade: { type: Number},
            },
            bowling: {
                runsgiven: { type: Number},
            }
        }
    ]
});

const usermodel = mongoose.model("cricket", schema);
module.exports = usermodel;
