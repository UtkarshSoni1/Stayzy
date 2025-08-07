import mongoose, {  Types } from 'mongoose'

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    wishlist: [{
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Houses'
    }]
});

const user = mongoose.model('users', userSchema);

export default user;