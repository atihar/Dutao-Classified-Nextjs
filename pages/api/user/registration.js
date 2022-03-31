import nc from 'next-connect';
import bcrypt from 'bcryptjs';
import User from '../../../models/user';
import db from '../../../lib/dbConnect';
import { signToken } from '../../../lib/auth';

const handler = nc();

handler.post(async (req, res, err) => {
  await db.connect();
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password),
    phone:req.body.phone,
    isAdmin: false,
  });
  const user = await newUser.save();
  await db.disconnect();

  // database error log in the console 
  console.log(err);

  const token = signToken(user);
  res.send({
    token,
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
  });
});

export default handler;