import nc from 'next-connect';
import db from '../../../lib/dbConnect';
import UserInfo from '../../../models/userInfo'
import { isAuth } from '../../../lib/auth';


const handler = nc();
handler.use(isAuth)


handler.get(async (req, res, id) => {
  const userID = req.query.id;
  await db.connect();
  const info = await UserInfo.findOne( { userId : userID });
  // await db.disconnect();
  res.send(info);
});


handler.delete(async (req, res) => {
  await db.connect();
  const userInfo = await UserInfo.findById(req.query.id);
  if (userInfo) {
    await userInfo.remove();
    // await db.disconnect();
    res.send({ message: 'User Info Cleared' });
  } else {
    // await db.disconnect();
    res.status(404).send({ message: 'User Info` Not Found' });
  }
});

handler.put(async (req, res) => {
  const userID = req.query.id;
  await db.connect();
  const info = await UserInfo.findOne( { userId : userID });
  if (info) {
    info.gender = req.body.gender,
    info.nationality = req.body.nationality,
    info.dateOfBirth = req.body.dateOfBirth,
    info.careerLevel = req.body.careerLevel,
    info.currentLocation = req.body.currentLocation,
    info.currentCompany = req.body.currentCompany,
    info.salaryExpectation = req.body.salaryExpectation,
    info.commitment = req.body.commitment,
    info.visaStatus = req.body.visaStatus,
    info.visaValidity = req.body.visaValidity,
    info.noticePeriod = req.body.noticePeriod,
    info.highestEducation = req.body.highestEducation,
    info.cv = req.body.cvFile,
    info.profileSummary =req.body.profileSummary,
    info.videoLink = req.body.videoLink,
    info.cv = req.body.cv,
    await info.save();
    // await db.disconnect();
    res.send({ message: 'Information Updated Successfully' });
  } else {
    // await db.disconnect();
    res.status(404).send({ message: 'user information not Found' });
  }
});


export default handler;