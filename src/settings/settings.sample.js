var settings = {};

// General configuration variables
settings.port = process.env.PORT || 3000

// MongoDB related configuration variables
settings.mongodb = {};
settings.mongodb.options = {};

settings.mongodb.uri = process.env.MONGODB_URI || '';
settings.mongodb.options.user = process.env.MONGODB_USERNAME || '';
settings.mongodb.options.pass = process.env.MONGODB_PASSWORD || '';

module.exports = settings;
