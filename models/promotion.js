import mongoose from "mongoose";

const promotionSchema = new mongoose.Schema({
    title:  {type: String},
    userId : {type:String},
    refId : {type:String},
    category : {type:String},
    status: {type: String},
    type:   {type: String},        //featured or promotion
    adDuration : {type: String},    //15 days, 20 days
    adBudget: {type:String} ,
    approvedBy : {type: String}
    },
    {
    timestamps: true,
})


export default mongoose.models.Promotion || mongoose.model('Promotion',promotionSchema);
