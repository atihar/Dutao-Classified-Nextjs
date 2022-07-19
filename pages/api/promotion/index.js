import nc from 'next-connect';
import db from '../../../lib/dbConnect';
import Promotion from '../../../models/promotion'
// import { isAuth } from '../../../lib/auth';


const handler = nc();
// handler.use(isAuth);

handler.post(async (req, res) => {
  await db.connect();
  const newPromotion = new Promotion({
    title:  req.body.title,
    userId : req.body.userId,
    refId : req.body.refId,
    category : req.body.category,   //property-sale , property-rent, motors
    status: "pending",
    type:   req.body.type,        //featured or promotion
    adDuration : req.body.adDuration,  //15 days, 20 days
    adBudget : req.body.adBudget,
    approvedBy : "dutao"
  });

  const promotedAd = await newPromotion.save();
  // await db.disconnect();
  res.status(200).send(promotedAd);
});


handler.get(async (req, res, id) => {
  await db.connect();
  const promotion = await Promotion.find();
  // await db.disconnect();
  res.send(promotion);
});

handler.delete(async (req, res) => {
  await db.connect();
  const promotion = await Promotion.findById(req.query.id);
  if (prodpromotionuct) {
    await promotion.remove();
    // await db.disconnect();
    res.send({ message: 'Promotion Removed' });
  } else {
    // await db.disconnect();
    res.status(404).send({ message: 'Product Not Found' });
  }
});

export default handler;