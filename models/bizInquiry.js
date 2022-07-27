import mongoose from "mongoose";

const bizInquirySchema=new mongoose.Schema({
  name : {type:String},
  email: { type: String, required: true},
  businessName: { type: String},
  industry : {type:String},
  requirementText: { type: String, required: true },
  status: { type: String},
  notes: {type:String}
},
{
  timestamps: true,
});

export default mongoose.models.BizInquiry || mongoose.model('BizInquiry', bizInquirySchema);
