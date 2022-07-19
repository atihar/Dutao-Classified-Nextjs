import nc from 'next-connect';
import db from '../../../lib/dbConnect';
import Community from '../../../models/community'
import { isAuth } from '../../../lib/auth';


const handler = nc();
handler.use(isAuth);

handler.post(async (req, res) => {
  await db.connect();
  const newCommunity = new Community({
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

  const community = await newCommunity.save();
  await db.disconnect();

  res.status(201).send(community);
});


handler.get(async (req, res, id) => {
  await db.connect();
  const community = await Community.find(id);
  await db.disconnect();
  res.status(201).send(community);
});


handler.delete(async (req, res) => {
  await db.connect();
  const product = await Product.findById(req.query.id);
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