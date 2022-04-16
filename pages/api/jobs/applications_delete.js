import nc from 'next-connect';
import db from '../../../lib/dbConnect';
import JobApplications from '../../../models/jobApplications'
import { isAuth } from '../../../lib/auth';


const handler = nc();
handler.use(isAuth)

//jobId is coming as query param to update an object
handler.delete(async (req, res) => {
    const jobId = req.query.jobId
    await db.connect();

    const data = await JobApplications.findOne({ jobId });
    if (data) {
        await data.remove();
        await db.disconnect();
      res.send({ message: 'Application status updated of the Job Successfully' });
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
  res.send(propertyForSale);
});


export default handler;