import nc from 'next-connect';
import User from '../../../models/user';
import db from '../../../lib/dbConnect';
import jwt from 'jsonwebtoken';

const handler = nc();

handler.get(async (req, res) => {
  const requestToken = (req.query.continue_verification);
  
  if ( requestToken ) {
    const token = await requestToken;
    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        res.status(401).send({ message: 'Token is not valid' });
      } else {
        req.user = decode;
        // next();
      }
    });
  } else {
    res.status(401).send({ message: 'Token is not suppiled' });
  }  

const email = req.user.email
await db.connect();
const info = await User.findOne({ email : email });
if(!info.activated){
    info.activated = true;
    info.save();
    await db.disconnect();
    res.status(200).json({ message: 'user is now active' });
} else {
  console.log("there was some problem while updating data");
}

});


export default handler;