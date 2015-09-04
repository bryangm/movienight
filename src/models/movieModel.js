var mongoose = require('mongoose');

var personSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
});

var movieSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    year: {
        type: Number
    },
    rating: {
        type: String
    },
    length: {
        type: Number
    },
    genre: {
        type: [String]
    },
    releaseDate: {
        type: Date
    },
    director: {
        type: [personSchema]
    },
    writer: {
        type: [personSchema]
    },
    cast: {
        type: [personSchema]
    }
});

module.exports = mongoose.model('Movie', movieSchema);
