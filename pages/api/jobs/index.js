import nc from 'next-connect';
import db from '../../../lib/dbConnect';
import Jobs from '../../../models/jobs'
import { isAuth } from '../../../lib/auth';


const handler = nc();
handler.use(isAuth);

handler.post(async (req, res) => {
  await db.connect();
  const newJob = new Jobs({
    title: req.body.title,
    category:req.body.category,
    company:req.body.company,
    phone:req.body.phone,
    address:req.body.address,
    salary:req.body.salary,
    city: req.body.city,
    area: req.body.area,
    isFeatured: false,
    isRemote: req.body.isRemote,
    neighbourhood:req.body.neighbourhood,
    employmentType:req.body.employmentType, //full-time, part-time, contract
    minWorkExp:req.body.minWorkExp, //minimum work experience required
    minEduLevel:req.body.minEduLevel,  //minimum educational requirement for job
    listedBy: req.body.listedBy,
    companySize:req.body.companySize,
    careerLevel:req.body.careerLevel,
    preferredGender:req.body.preferredGender,
    reqNationality:req.body.reqNationality,
    language:req.body.language,
    isApproved:false,
    description:req.body.description,
    userEmail:req.body.userEmail,
    perks: req.body.perks,
  });
  const job = await newJob.save();
  await db.disconnect();

  res.send(job).status(201);
});

handler.get(async (req, res, id) => {
  await db.connect();
  const job = await Jobs.find(id);
  await db.disconnect();
  res.send(job);
});

handler.delete(async (req, res) => {
  await db.connect();
  const job = await Jobs.findById(req.query.id);
  if (job) {
    await job.remove();
    await db.disconnect();
    res.send({ message: 'job Deleted' });
  } else {
    await db.disconnect();
    res.status(404).send({ message: 'job Not Found' });
  }
});

export default handler;