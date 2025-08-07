import mongoose, {  Types } from 'mongoose'

const houseSchema = mongoose.Schema({
    address: String,
    price: Number,
    desc: String,
    images: {
        type: [String],
        default: []
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'owners'
    }
})

const house = mongoose.model('houses', houseSchema);

export default house;