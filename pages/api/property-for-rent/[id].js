import nc from 'next-connect';
import db from '../../../lib/dbConnect';
import PropertyForRent from '../../../models/propertyForRent'


const handler = nc();

handler.get(async (req, res, id) => {
  await db.connect();
  const PropertyForRent = await PropertyForRent.find(id);
  // await db.disconnect();
  res.status(201).send(PropertyForRent);
});

handler.delete(async (req, res) => {
  await db.connect();
  const product = await PropertyForRent.findById(req.query.id);
  if (product) {
    await product.remove();
    // await db.disconnect();
    res.status(201).send({ message: 'Product Deleted' });
  } else {
    // await db.disconnect();
    res.status(404).send({ message: 'Product Not Found' });
  }
});

export default handler;