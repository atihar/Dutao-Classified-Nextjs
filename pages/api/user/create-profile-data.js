import nc from 'next-connect';
import db from '../../../lib/dbConnect';
import UserInfo from '../../../models/userInfo'


const handler = nc();

handler.post(async (req, res) => {
  await db.connect();
  const newUserInfo = new UserInfo({
    userId: req.body.userId,
    name: req.body.name,
    gender: req.body.gender,
    nationality: req.body.nationality,
    dateOfBirth: req.body.dateOfBirth,
    careerLevel: req.body.careerLevel,
    currentLocation: req.body.currentLocation,
    currentCompany: req.body.currentCompany,
    salaryExpection: req.body.salaryExpection,
    commitment: req.body.commitment,
    visaStatus: req.body.visaStatus,
    visaValidity: req.body.visaValidity,
    noticePeriod: req.body.noticePeriod,
    highestEducation: req.body.highestEducation,
    cv: req.body.cvFile,
    profileSummary: req.body.profileSummary,
    videoLink : req.body.videoLink,
    cv : req.body.cv,
    subscription: 1,// 0-non. 1-basic, 2-standard, 3-premium (this will be set by the payment)
    subscriptionDate: req.body.subscriptionDate,
    subscriptionExpr: req.body.subscriptionExpr
  });

  const userInfo = await newUserInfo.save();
  // await db.disconnect();
});


export default handler;