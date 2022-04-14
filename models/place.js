import mongoose from "mongoose";

const placeSchema = new mongoose.Schema({
    title: { type:String},
    category: {type:String},  // hotel, bank, hospital or something like that
    images: {type: Array},  //gallery images
    video: {type:String},
    description: {type:String},
    address: { type:String},
    website: {type:String},
    phone: {type:String},
    city: {type: String},
    area: {type: String},
    isFeatured: {type:Boolean},  //minimum educational requirement for job
    isVerified: {type:Boolean},  //minimum educational requirement for job
    listedBy: {type:String},
    isApproved: {type:Boolean},
    features: [{type: String}],
    latitude: {type: Number},
    longitude: {type: Number}
    },
    {
    timestamps: true,
})


export default mongoose.models.Place || mongoose.model('Place', placeSchema);
