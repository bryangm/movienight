var mongoose = require('mongoose');

var submissionSchema = mongoose.Schema({
    movieId: {
        type: ObjectId
    },
    title: {
        type: String,
        required: true
    },
    votes: {
        type: Number,
        default: 0
    }
});

var nightSchema = mongoose.Schema({
    night: {
        type: Date
        required: true
    },
    submissions: {
        type: [submissionSchema]
    }
});

module.exports = = mongoose.model('Night', nightSchema);
