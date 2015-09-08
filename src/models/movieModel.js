var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var personSchema = Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
});

var movieSchema = Schema({
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
    directors: {
        type: [personSchema]
    },
    writers: {
        type: [personSchema]
    },
    cast: {
        type: [personSchema]
    }
});

movieSchema.virtual('id').get(function() {
  return this._id.toString();
});

module.exports = mongoose.model('Movie', movieSchema);
