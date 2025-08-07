import mongoose, {  Types } from 'mongoose'

const ownerSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    image: String,
    phone: String,
    houses: [{
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Houses'
    }]
})

const owner = mongoose.model('owners', ownerSchema);
export default owner;