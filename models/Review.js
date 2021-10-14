const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
    aboutBook: {
        type: String,
        max: 150
    },
    posAspects: {
        type: String,
        max: 150
    },
    negAspects: {
        type: String,
        max: 150
    },
    description: {
        type: String,
        max:250
    },
    idiomsAndPhrases: {
        type: String,
        max: 150
    },
    obliviousFacts : {
        characters: {
            type: String,
            max: 150
        },
        environment: {
            type: String,
            max: 150
        },
        scenarios: {
            type: String,
            max: 150
        }
    },
    userId : {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    bookId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Book'
    }

})

module.exports = mongoose.model("Review", ReviewSchema);