import nc from 'next-connect';
import User from '../../../models/user';
import db from '../../../lib/dbConnect';
import jwt from 'jsonwebtoken';

const handler = nc();

handler.get(async (req, res, next) => {
  const token = req.query.token;
  
  if ( token ) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        res.status(401).send({ message: 'Token is not valid' });
        res.end()
      } else {
        req.user = decode;
        next();
      }
    });
  } else {
    res.status(401).send({ message: 'Token is not suppiled' });
  }  
  
await db.connect();
const info = await User.findOne({ email : req.user.email });
  if(info && !info.activated){
      info.activated = true;
      await info.save();
      await db.disconnect();
      res.status(200).send({ message: 'user is now active' });
      res.end();
  }
  else {
    res.status(200).send({ message: 'user is activated already' });
  }
});

export default handler;