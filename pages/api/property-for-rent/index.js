import nc from 'next-connect';
import db from '../../../lib/dbConnect';
import PropertyForRent from '../../../models/propertyForSale'


const handler = nc();

handler.post(async (req, res) => {
  await db.connect();
  const newPropertyForRent = new PropertyForRent({
    title: req.body.title,
    category: req.body.category,
    property: req.body.property,
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
    size: req.body.size,
    bedroom: req.body.bedroom,
    bathroom: req.body.bathroom,
    developer: req.body.developer,
    annualCommunityFee: req.body.annualCommunityFee,
    buyerTransferFee:req.body.buyerTransferFee,
    sellerTransferFee: req.body.sellerTransferFee,
    maintenanceFees: req.body.maintenanceFees,
    mapData:{
        latitude: req.body.latitude,
        longitude: req.body.longitude
    },
    amenities: req.body.amenities,
    propertyInfo:{
        apartmentFor:req.body.apartmentFor,
        listedBy: req.body.listedBy,
        propertyRef:req.body.propertyRef,
        buildingName:req.body.buildingName,
        RERApermitNo:req.body.RERApermitNo
    }
  });

  const propertyForRent = await newPropertyForRent.save();
  await db.disconnect();

  res.send(propertyForRent).status(201);
});

handler.get(async (req, res, id) => {
  await db.connect();
  const propertyForRent = await PropertyForRent.find(id);
  await db.disconnect();
  res.send(propertyForRent);
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