import nc from 'next-connect';
import User from '../../../models/user';
import db from '../../../lib/dbConnect';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const handler = nc();

handler.put(async (req, res, next) => {
  const {token} = req.query;
  
  if ( token ) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        res.status(203);
        console.log("not valid")
      } else {
        req.user = decode;
        console.log(req.user)
        next();
      }
    });
  } else {
    res.status(203);
    console.log("token not supplied")
  }  

  await db.connect();
  const userEmail = await req.user.email;

  const info = await User.findOne({ email : userEmail });
  if(info && info.activated){
      info.password = bcrypt.hashSync(req.body.password);
      await info.save();
      console.log("password updated")
      res.status(200);
      // await db.disconnect();
  }
});

export default handler;