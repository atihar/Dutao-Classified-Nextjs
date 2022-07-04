import nc from 'next-connect';
import db from '../../../lib/dbConnect';
import UsedItems from '../../../models/usedItems'
import { isAuth } from '../../../lib/auth';


const handler = nc();
handler.use(isAuth)

handler.post(async (req, res) => {
  await db.connect();
  const newUsedItems = new UsedItems({
    title: req.body.title,
    category: req.body.category,
    isFeatured:false,
    city: req.body.city,
    area: req.body.area,
    postedBy: req.body.postedBy,
    images: req.body.images,
    video: req.body.video,
    address:req.body.address,
    description:req.body.description,
    price: req.body.price,
    phone: req.body.phone,
    userEmail: req.body.userEmail,
    views:0,
    phoneClick: 0,
  });

  const usedItem = await newUsedItems.save();
  await db.disconnect();

  res.send(usedItem).status(201);
});


handler.get(async (req, res, id) => {
  await db.connect();
  const community = await UsedItems.find(id);
  await db.disconnect();
  res.send(community);
});


handler.delete(async (req, res) => {
  await db.connect();
  const product = await UsedItems.findById(req.query.id);
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