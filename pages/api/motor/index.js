import nc from 'next-connect';
import db from '../../../lib/dbConnect';
import Motors from '../../../models/motos'


const handler = nc();

handler.post(async (req, res) => {
  await db.connect();
  const newMotor = new Motors({
    title: req.body.title,
    category: req.body.category,
    verifiedOrNot: false,
    isFeatured:false,
    city: req.body.city,
    area: req.body.area,
    markedOrNot: false,
    postedBy: req.body.postedBy,
    images: req.body.images,
    video: req.body.video,
    phone: req.body.phone,
    userEmail: req.body.userEmail,
    address:req.body.address,
    description:req.body.description,
    price: req.body.price,
    trim: req.body.trim,
    kilometers: req.body.kilometers,
    warranty: req.body.warranty,
    color: req.body.color,
    marketYear: req.body.marketYear,
    doors:req.body.doors,
    bodyCondition: req.body.bodyCondition,
    mechanicalCondition: req.body.mechanicalCondition,
    sellerType: req.body.sellerType,
    bodyType:req.body.bodyType,
    cylinders: req.body.cylinders,
    transmissionType: req.body.transmissionType,
    regionalSpec: req.body.regionalSpec,
    horsePower: req.body.horsePower,
    fuelType: req.body.fuelType,
    steeringSide: req.body.steeringSide,
    carinspection: req.body.carinspection,
  });

  const Motor = await newMotor.save();
  await db.disconnect();

  res.send(Motor).status(201);
});

handler.get(async (req, res, id) => {
  await db.connect();
  const Motor = await Motors.find(id);
  await db.disconnect();
  res.send(Motor);
});

handler.delete(async (req, res) => {
  await db.connect();
  const product = await Product.findById(req.query.id);
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