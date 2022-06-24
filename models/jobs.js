import mongoose from "mongoose";

const jobsSchema = new mongoose.Schema({
    title:{ type:String},
    category:{type:String},
    images:{type: Array},  //company logo
    company:{ type: String },
    phone:{type:String},
    address:{ type:String},
    salary:{type:String},
    city: {type: String},
    area: {type: String},
    isFeatured:{type:Boolean},
    isRemote:{type:String},
    neighbourhood:{type:String},
    employmentType:{type:String}, //full-time, part-time, contract
    minWorkExp:{type:String}, //minimum work experience required
    minEduLevel:{type:String},  //minimum educational requirement for job
    listedBy:{type:String},
    companySize:{type:String},
    careerLevel:{type:String},
    preferredGender:{type:String},
    reqNationality:{type:String},
    language:{type: String},
    isApproved:{type:String},
    description:{type:String},
    userEmail:{type:String},
    perks:[{type: String}],
    userApplied:{type:Array},
    views: {type:Number}   
    },
    {
    timestamps: true,
})


export default mongoose.models.Jobs || mongoose.model('Jobs',jobsSchema);
