import nc from 'next-connect';
import User from '../../../models/user';
import db from '../../../lib/dbConnect';
import jwt from 'jsonwebtoken';

const handler = nc();

handler.get(async (req, res) => {
  const requestToken = (req.query.continue_verification);
  // //parsing json from string that has been passed via query parameter
  // const userToken = JSON.parse(requestToken)
  
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
const info = await User.findOne( { email : email });
if(info){
  //check if user is already activated 
  if(!info.activated){
    info.activated = true;
    res.status(200).json({ message: 'user is now active' });
  }
  else{
    // console.log('user already activated')
    res.status(200).json({ message: 'user is activate' });
  }
  
  info.save();
  await db.disconnect();
} else {
  console.log("there was some problem while updating data")
  await db.disconnect();
}

});


export default handler;