import mongoose from "mongoose";

const advertisementSchema = new mongoose.Schema({
    title:{ type: String},
    images: {type: Array},
    link:{ type: String },
    category : {type:String},
    views: {type: Number},
    clicks:{type: Number},
    endTime : {type: Date}
    },
    {
    timestamps: true,
})


export default mongoose.models.Advertisement || mongoose.model('Advertisement',advertisementSchema);
