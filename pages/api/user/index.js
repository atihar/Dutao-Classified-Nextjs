import nc from 'next-connect';
import User from '../../../models/user';
import db from '../../../lib/dbConnect';


const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const user = await User.find().lean();
  // await db.disconnect();
  res.status(201).json(user);
});

export default handler;