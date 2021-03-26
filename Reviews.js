var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

mongoose.Promise = global.Promise;

try {
    mongoose.connect( process.env.DB, {useNewUrlParser: true, useUnifiedTopology: true}, () =>
        console.log("connected-reviews"));
}catch (error) {
    console.log("could not connect reviews");
}
mongoose.set('useCreateIndex', true);

//user schema
var ReviewSchema = new Schema({
    reviewer_name: { type: String, required: true},
    rating: { type: String, required: true},
    movie: { type: String, required: true},
    review: { type: String, required: true}
});

ReviewSchema.pre('save', function(next) {
    next();
});

//return the model to server
module.exports = mongoose.model('Review', ReviewSchema);