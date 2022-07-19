import nc from 'next-connect';
import db from '../../../lib/dbConnect';
import UserInfo from '../../../models/userInfo'
import PropertyForSale from '../../../models/propertyForSale';
import PropertyForRent from '../../../models/propertyForRent';
import Motors from '../../../models/motors'
import Community from '../../../models/community'
import Jobs from '../../../models/jobs'
import UsedItem from '../../../models/usedItems'
// import { isAuth } from '../../../lib/auth'


const handler = nc();
// handler.use(isAuth)


handler.get(async (req, res) => {
  const email = req.query.email;
  await db.connect();
  const propertySale = await PropertyForSale.find({ userEmail: email }).count();
  const propertyRent = await PropertyForRent.find({ userEmail: email }).count();
  const motor = await Motors.find({ userEmail: email }).count();
  const usedItems = await UsedItem.find({ userEmail: email }).count();
  const community = await Community.find({ userEmail: email }).count();
  const job = await Jobs.find({ userEmail: email }).count();
  const totalad = propertySale + propertyRent + motor + usedItems + community + job;
  // console.log("sale :"+ propertySale + "rent :" + propertyRent + "motor :"  + motor + "usedItems :" + usedItems + "community :" + community)
  // await db.disconnect();
  res.status(200).json({ totalad })
});


export default handler;