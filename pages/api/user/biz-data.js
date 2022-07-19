import nc from 'next-connect';
import db from '../../../lib/dbConnect';
import UserInfo from '../../../models/userInfo'
// import { isAuth } from '../../../lib/auth'


const handler = nc();
// handler.use(isAuth)


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
  console.log(req.body)
  await db.connect();
  const info = await UserInfo.findOne( { userId : userID });
  if (info) {
    info.subscription = req.body.subscription,
    info.subscriptionDate = req.body.subscriptionDate,
    info.subscriptionExpr = req.body.subscriptionExpr,
    info.businessCategory = req.body.businessCategory,
    info.businessName = req.body.businessName,
    info.businessAddress = req.body.businessAddress,
    info.businessLogo = req.body.businessLogo

    const bizData = await info.save();
    // await db.disconnect();
    res.send(bizData);
  } else {
    // await db.disconnect();
    res.status(404).send({ message: 'business information not Found' });
  }
});


export default handler;