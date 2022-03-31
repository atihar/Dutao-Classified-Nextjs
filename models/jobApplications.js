// Schema for applications submitted from single job page..
// We are keeping separate as it will be only used in recruiters/job posters dashboard. We are also getting separate active
// users who are applying to jobs.

import mongoose from "mongoose";

const jobApplicationSchema = new mongoose.Schema({
    jobId:{ type:String},       //applied jobs ID
    applications:{type:Array}
    },
    {
    timestamps: true,
    })


export default mongoose.models.JobApplications || mongoose.model('JobApplications',jobApplicationSchema);
