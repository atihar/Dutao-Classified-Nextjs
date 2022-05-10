import mongoose from "mongoose";

const reportSchema=new mongoose.Schema({
  adId : {type:String},
  email: { type: String, required: true},
  category : {type:String},
  report: { type: String, required: true },
  status: { type: String},
},
{
  timestamps: true,
});

// const User = mongoose.models.User || mongoose.model('User', userSchema);
// export default User;

export default mongoose.models.Report || mongoose.model('Report', reportSchema);
