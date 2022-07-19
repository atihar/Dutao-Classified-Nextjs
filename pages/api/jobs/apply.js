import nc from 'next-connect';
import db from '../../../lib/dbConnect';
import JobApplications from '../../../models/jobApplications'
import { isAuth } from '../../../lib/auth';


const handler = nc();

// on every job post this API will be hitted to create one jobApplication object 
handler.post(async (req, res) => {
  console.log("hitting")
  await db.connect();
  const newJobApplication = new JobApplications({
    jobId : req.query.jobId,
    applications: []
  });

  const application = await newJobApplication.save();
  await db.disconnect();
  res.status(201).send(application);

});



//jobId is coming as query param to update an object
handler.put(async (req, res) => {
    const jobId = req.query.jobId
    const newApplication = req.body

    await db.connect();

    const data = await JobApplications.findOne({ jobId });
    if (data) {
       let application = data.applications;
       let obj = newApplication
       application.push(obj)
        await data.save();
        await db.disconnect();
      res.status(201).send({ message: 'Application posted to the Job Successfully' });
    } else {
      await db.disconnect();
      res.status(404).send({ message: 'user information not Found' });
    }
  });




handler.get(async (req, res) => {
  const jobId = req.query.jobId
  await db.connect();
  const propertyForSale = await JobApplications.findOne({jobId});
  await db.disconnect();
  res.status(201).send(propertyForSale);
});




handler.delete(async (req, res) => {
  await db.connect();
  const product = await Product.findById(req.query.id);
  if (product) {
    await product.remove();
    await db.disconnect();
    res.status(201).send({ message: 'Product Deleted' });
  } else {
    await db.disconnect();
    res.status(404).send({ message: 'Product Not Found' });
  }
});

export default handler;