const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {type: String, unique: true, required: true},
    hash: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String},
    role: {type: Number, required: true},
    createdDate: {type: Date, default: Date.now}
});

UserSchema.set('toJSON', {virtuals: true});

module.exports = mongoose.model('User', UserSchema);