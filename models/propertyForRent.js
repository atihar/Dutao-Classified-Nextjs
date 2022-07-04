import mongoose from "mongoose";

const propertyRentSchema = new mongoose.Schema({
    title:{ type:String},
    category:{type:String},
    city: {type: String},
    area: {type: String},
    verifiedOrNot:{type:Boolean},
    isFeatured:{type:Boolean},
    furnished:{type:String},
    postedBy:{ type:String },
    images:{type: Array},
    video:{ type: String },
    phone:{type:String},
    address:{ type:String},
    description:{type:String},
    price:{type:Number},
    size:{type:Number},
    bedroom:{type:Number},
    bathroom:{type:Number},
    maintenanceFee:{type:Number},
    mapData:{
        latitude:{type: Number},
        longitude: {type: Number}
    },
    amenities: [{type: String}],
    propertyReference:{ type:String},
    RERApermitNo: {type:Number},
    userEmail:{type:String},
    phone:{type:String},
    views: {type:Number},
    phoneClick: {type:Number},
    isPromoted : {type:Boolean},
    businessLogo : {type:String},
    businessName : {type:String}
    },
    {
    timestamps: true,
})


export default mongoose.models.PropertyForRent || mongoose.model('PropertyForRent',propertyRentSchema);
