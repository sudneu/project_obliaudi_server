const mongoose = require('mongoose');

const mongooseSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, "Please enter a name"]
    },
    email : {
        type: String,
        required: [true, "Please enter an email"], 
        match: [
            "/^$/",
            "Enter a valid email"
        ]
    },
    password:{
        type:String,
        require: [true, "Please enter your password"]
    },
    updatedAt: {
        type: Date
    }
});

module.exports = mongoose.model("User", mongooseSchema);