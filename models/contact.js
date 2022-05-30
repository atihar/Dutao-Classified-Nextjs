import mongoose from "mongoose";

const contactSchema=new mongoose.Schema({
  name : {type:String},
  email: { type: String, required: true},
  phone: { type: String},
  category : {type:String},
  message: { type: String, required: true },
  status: { type: String},
  notes: {type:String}
},
{
  timestamps: true,
});

export default mongoose.models.Contact || mongoose.model('Contact', contactSchema);
