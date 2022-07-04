import mongoose from "mongoose";

const communitySchema = new mongoose.Schema({
    title:{ type:String},
    category:{type:String},
    city: {type: String},
    area: {type: String},
    isFeatured:{type:Boolean},
    postedBy:{ type:String },
    images:{type: Array},
    video:{ type: String },
    address:{ type:String},
    description:{type:String},
    price:{type:Number},
    userEmail:{type:String},
    phone:{type:String},
    views: {type:Number},
    phoneClick: {type:Number},
    },
    {
    timestamps: true,
})


export default mongoose.models.Community || mongoose.model('Community',communitySchema);
