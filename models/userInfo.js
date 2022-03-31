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
})

export default mongoose.models.UserInfo || mongoose.model('UserInfo', userInfoSchema)