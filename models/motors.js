import mongoose from "mongoose";

const motorSaleSchema = new mongoose.Schema({
    title:{ type:String},
    category:{type:String},
    images:{type: Array},
    video:{ type: String },
    phone:{type:String},
    address:{ type:String},
    description:{type:String},
    price:{type:Number},
    city: {type: String},
    area: {type: String},
    verifiedOrNot:{type:Boolean}, //history check or not
    isFeatured:{type:Boolean},
    trim:{type:String},
    kilometers:{ type:String },
    warranty:{ type:String },
    color:{ type:String },
    marketYear:{ type:String },
    doors:{ type:Number },
    bodyCondition:{ type:String },
    mechanicalCondition:{ type:String },
    sellerType:{ type:String },
    bodyType:{ type:String },
    cylinders:{ type:String },
    transmissionType:{ type:String },
    regionalSpec:{ type:String },
    horsePower:{ type:String },
    fuelType:{ type:String },
    steeringSide:{ type:String },
    carInspection:{ type:String },
    accidentHistory:{ type:String },
    userEmail:{type:String},
    phone:{type:String},
    views: {type:Number},
    businessLogo : {type:String},
    businessName : {type:String},
    isPromoted : {type:Boolean},
    },
    {
    timestamps: true,
})


export default mongoose.models.Motors || mongoose.model('Motors',motorSaleSchema);
