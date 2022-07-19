import nc from 'next-connect';
import db from '../../../../lib/dbConnect';
import PropertyForSale from '../../../../models/propertyForSale'

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const userEmail = req.query.userEmail
  const myPropertyForSale = await PropertyForSale.find({userEmail:userEmail});
  // await db.disconnect();
  res.send(myPropertyForSale);
});


// Direct product api delete is using for deletion ... need to be secured and passed through middleware 
// ==========================
// =========================
handler.delete(async (req, res) => {
  await db.connect();
  const product = await PropertyForSale.findById(req.query.id);
  if (product) {
    await product.remove();
    // await db.disconnect();
    res.send({ message: 'Product Deleted' });
  } else {
    // await db.disconnect();
    res.status(404).send({ message: 'Product Not Found' });
  }
});

export default handler;