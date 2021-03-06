import mongoose from "mongoose";

const userInfoSchema=new mongoose.Schema({
    gender:{ type:String },
    nationality:{ type:String },
    dateOfBirth:{ type:Date },
    careerLevel:{ type:String },
    currentLocation:{ type:String },
    currentCompany:{type:String},
    salaryExpectation:{ type:String },
    commitment:{ type:String },
    visaStatus:{ type:String },
    visaValidity:{ type:Date },
    noticePeriod:{ type:String },
    videoLink:{ type:String },
    highestEducation:{ type:String },
    cv:{ type:String },
    profileSummary:{ type:String },
    newsletter:{ type:Boolean },
    advertisement:{ type:Boolean },
    userId:{type:String},
    
    subscription: { type: Number },// 0-non. 1-basic, 2-standard, 3-premium (this will be set by the payment)
    subscriptionDate: { type: Date },
    subscriptionExpr: { type: Date },
    businessCategory: {type: String},
    businessName : {type : String},
    businessAddress : {type:String},
    businessLogo : {type:String}
})

export default mongoose.models.UserInfo || mongoose.model('UserInfo', userInfoSchema)