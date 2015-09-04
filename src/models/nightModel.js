var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var submissionSchema = Schema({
    movieId: {
        type: Schema.Types.ObjectId,
        ref: 'Movie'
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

var nightSchema = Schema({
    night: {
        type: Date,
        required: true
    },
    submissions: {
        type: [submissionSchema]
    }
});

module.exports = mongoose.model('Night', nightSchema);
