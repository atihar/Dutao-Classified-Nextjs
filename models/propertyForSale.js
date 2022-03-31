import mongoose from "mongoose";

const propertySaleSchema = new mongoose.Schema({
    title:{ type:String},
    category:{type:String},
    property:{type:String},
    city: {type: String},
    area: {type: String},
    verifiedOrNot:{type:Boolean},
    isFeatured:{type:Boolean},
    furnished:{type:Boolean},
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
    developer:{type:String},
    annualCommunityFee:{type:String},
    buyerTransferFee:{type:Number},
    sellerTransferFee:{type:Number},
    maintenanceFee:{type:Number},
    mapData:{
        latitude:{type: Number},
        longitude: {type: Number}
    },
    amenities: [{type: String}],
    // amenities:{type:[String]},
    propertyInfo:{
        apartmentFor:{type: String},
        listedBy: { type: String },
        propertyRef:{ type: String },
        buildingName:{ type: String },
        RERApermitNo:{ type: String }
    },
    userEmail:{type:String},
    phone:{type:String},
    },
    {
    timestamps: true,
})


export default mongoose.models.PropertyForSale || mongoose.model('PropertyForSale',propertySaleSchema);
