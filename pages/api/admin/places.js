import nc from 'next-connect';
import db from '../../../lib/dbConnect';
import Place from '../../../models/place'

const handler = nc();

handler.post(async (req, res) => {
  await db.connect();
  const newPlace = new Place({
    title: req.body.title,
    category: req.body.category,
    images: req.body.images,
    video: req.body.video,
    description:req.body.description,
    phone: req.body.phone,
    website: req.body.website,
    city: req.body.city,
    area: req.body.area,
    address: req.body.address,
    listedBy: req.body.listedBy,
    isVerified: false,
    isFeatured:false,
    isApproved:false,
    latitude: req.body.latitude,
    longitude: req.body.longitude
  });

  const place = await newPlace.save();
  await db.disconnect();

  res.send(place).status(201);
});


handler.get(async (req, res, id) => {
  await db.connect();
  const Motor = await Place.find(id);
  await db.disconnect();
  res.send(Motor);
});

handler.delete(async (req, res) => {
  await db.connect();
  const product = await Place.findById(req.query.id);
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