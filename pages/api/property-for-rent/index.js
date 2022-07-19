import nc from 'next-connect';
import db from '../../../lib/dbConnect';
import PropertyForRent from '../../../models/propertyForRent'
import { isAuth } from '../../../lib/auth';


const handler = nc();
handler.use(isAuth);

handler.post(async (req, res) => {
  await db.connect();
  const newPropertyForRent = new PropertyForRent({
    title: req.body.title,
    category: req.body.category,
    verifiedOrNot: false,
    isFeatured:false,
    furnished: req.body.furnished,
    city: req.body.city,
    area: req.body.area,
    postedBy: req.body.postedBy,
    images: req.body.images,
    video: req.body.video,
    phone: req.body.phone,
    userEmail: req.body.userEmail,
    address:req.body.address,
    description:req.body.description,
    price: req.body.price,
    size: req.body.size,
    bedroom: req.body.bedroom,
    bathroom: req.body.bathroom,
    maintenanceFees: req.body.maintenanceFees,
    mapData:{
        latitude: req.body.latitude,
        longitude: req.body.longitude
    },
    amenities: req.body.amenities,
    businessName : req.body.businessName,
    businessLogo : req.body.businessLogo,
    views: 0,
    phoneClick: 0,
    isPromoted: false
  });

  const propertyForRent = await newPropertyForRent.save();
  // await db.disconnect();

  res.status(201).send(propertyForRent);
});

handler.get(async (req, res, id) => {
  await db.connect();
  const propertyForRent = await PropertyForRent.find(id);
  // await db.disconnect();
  res.send(propertyForRent);
});

handler.delete(async (req, res) => {
  await db.connect();
  const product = await PropertyForRent.findById(req.query.id);
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