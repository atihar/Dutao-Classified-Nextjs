import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    title:{
        type:String,
        required: true,
        unique: true
    },
    icon:{
        type:String,
    },
    description:{
        type:String,
    },
    parent: {
        type:String,
    },
    categoryPath: {
        type: String
    }
})

export default mongoose.models.Category || mongoose.model('Category', categorySchema)