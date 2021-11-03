import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId


//REVIEW what does the Schema do??? 
export const HouseSchema = new Schema({
    bedrooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    levels: { type: Number, min: 1 },
    year: { type: Number },
    price: { type: Number, required: true, min: 1 },
    description: { type: String, default: 'No Description Provided' },
    imgUrl: { type: String },
    // REVIEW what is ObjectId?? How does this connect it to account? What is this ref: 'Profile' doing??
    creatorId: { type: ObjectId, required: true, ref: 'Profile' }
}, { timestamps: true, toJSON: { virtuals: true } })

//REVIEW what on earth is all of this doing??
HouseSchema.virtual('creator', {
    localField: 'creatorId',
    ref: 'Profile',
    //REVIEW why the underscore??
    foreignField: '_id',
    justOne: true
})