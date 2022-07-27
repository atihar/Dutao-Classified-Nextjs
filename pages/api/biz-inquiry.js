import nc from 'next-connect';
import db from '../../lib/dbConnect';
import BizInquiry from '../../models/bizInquiry'


const handler = nc();
// handler.use(isAuth)

handler.post(async (req, res) => {
  await db.connect();
  const newMessage = new BizInquiry({
    name : req.body.name,
    email: req.body.email,
    businessName : req.body.businessName,
    industry: req.body.industry,
    requirementText: req.body.requirementText,
    status: "open",
    notes:  " "
  });

  const contact = await newMessage.save();
  // await db.disconnect();

  res.status(201).end();
});

handler.get(async (req, res, id) => {
  await db.connect();
  const Contact = await BizInquiry.find();
  // await db.disconnect();
  res.status(200).send(Contact);
});

handler.delete(async (req, res) => {
  await db.connect();
  const Contact = await BizInquiry.findById(req.query.id);
  if (Contact) {
    await Contact.remove();
    // await db.disconnect();
    res.send({ message: 'Business Inquiry Removed/Resolved' });
  } else {
    // await db.disconnect();
    res.status(404).send({ message: 'Biz Inquiry Not Found' });
  }
});

export default handler;