import nc from 'next-connect';
import db from '../../../../lib/dbConnect';
import Motors from '../../../../models/motors'

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const userEmail = req.query.userEmail
  const myPropertyForSale = await Motors.find({userEmail:userEmail});
  await db.disconnect();
  res.send(myPropertyForSale);
});

handler.delete(async (req, res) => {
  await db.connect();
  const product = await Motors.findById(req.query.id);
  if (product) {
    await product.remove();
    await db.disconnect();
    res.send({ message: 'Product Deleted' });
  } else {
    await db.disconnect();
    res.status(404).send({ message: 'Product Not Found' });
  }
});

export default handler;