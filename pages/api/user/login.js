import nc from 'next-connect';
import bcrypt from 'bcryptjs';
import User from '../../../models/user';
import db from '../../../lib/dbConnect';
import { signToken } from '../../../lib/auth';


const handler = nc();

handler.post(async (req, res) => {
  await db.connect();
  const user = await User.findOne({ email: req.body.email });
  // await db.disconnect();
  if (user && user.activated && bcrypt.compareSync(req.body.password, user.password)) {
    const token = signToken(user);
    res.send({
      token,
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      activated : user.activated
    });
  } else if(user && !user.activated && bcrypt.compareSync(req.body.password, user.password)){
    res.status(401).json({ message: 'User is not activated' });
  }
  else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
});

export default handler;