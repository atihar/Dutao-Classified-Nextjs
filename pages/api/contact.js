import nc from 'next-connect';
import db from '../../lib/dbConnect';
import ContactForm from '../../models/contact'


const handler = nc();
// handler.use(isAuth)

handler.post(async (req, res) => {
  await db.connect();
  const newMessage = new ContactForm({
    name : req.body.name,
    email: req.body.email,
    phone: req.body.email,
    category : req.body.category,
    message: req.body.message,
    status: "open",
    notes:  " "
  });

  const contact = await newMessage.save();
  // await db.disconnect();

  res.status(201).end();
});

handler.get(async (req, res, id) => {
  await db.connect();
  const Contact = await ContactForm.find();
  // await db.disconnect();
  res.status(200).send(Contact);
});

handler.delete(async (req, res) => {
  await db.connect();
  const Contact = await ContactForm.findById(req.query.id);
  if (Contact) {
    await Contact.remove();
    // await db.disconnect();
    res.send({ message: 'Contact Message Removed/Resolved' });
  } else {
    // await db.disconnect();
    res.status(404).send({ message: 'Report Not Found' });
  }
});

export default handler;