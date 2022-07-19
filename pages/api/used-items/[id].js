import nc from 'next-connect';
import db from '../../../lib/dbConnect';
import PropertyForSale from '../../../models/propertyForSale'


const handler = nc();

handler.get(async (req, res, id) => {
  await db.connect();
  const propertyForSale = await PropertyForSale.find(id);
  await db.disconnect();
  res.status(201).send(propertyForSale);
});

handler.delete(async (req, res) => {
  await db.connect();
  const product = await PropertyForSale.findById(req.query.id);
  if (product) {
    await product.remove();
    await db.disconnect();
    res.status(201).send({ message: 'Product Deleted' });
  } else {
    await db.disconnect();
    res.status(404).send({ message: 'Product Not Found' });
  }
});

export default handler;