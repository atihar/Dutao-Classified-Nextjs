// This API is responsible for updating status for each of the applications from the jobs
// There was a bug updating the mongoose object
// https://stackoverflow.com/questions/63796000/mongoose-how-to-update-all-objects-within-an-array-in-mongodb
// solved from above .. We have to mark the updated sub-document and tell the mongoose which one needs to be changed


import nc from 'next-connect';
import db from '../../../lib/dbConnect';
import JobApplications from '../../../models/jobApplications'
import { isAuth } from '../../../lib/auth';


const handler = nc();
handler.use(isAuth)

//jobId is coming as query param to update an object
handler.put(async (req, res) => {
    const jobId = req.query.jobId
    const newApplicationUserId = req.body.appId
    await db.connect();

    const data = await JobApplications.findOne({ jobId });
    if (data) {
      data.applications.map((x) => {
         if(x.applicantsUserId === newApplicationUserId ){
            x.status = req.body.status;
         }
         
        })
        // const changedStatus = status;
        data.markModified('applications');
        await data.save();
        await db.disconnect();
      res.status(201).send({ message: 'Application status updated of the Job Successfully' });
    } else {
      await db.disconnect();
      res.status(404).send({ message: 'application information could not Found' });
    }
  });




handler.get(async (req, res) => {
  const jobId = req.query.jobId
  await db.connect();
  const propertyForSale = await JobApplications.findOne({jobId});
  await db.disconnect();
  res.status(201).send(propertyForSale);
});


export default handler;