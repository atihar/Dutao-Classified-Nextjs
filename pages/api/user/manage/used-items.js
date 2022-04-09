import nc from 'next-connect';
import db from '../../../../lib/dbConnect';
import UsedItems from '../../../../models/usedItems'

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const userEmail = req.query.userEmail
  const items = await UsedItems.find({userEmail:userEmail});
  await db.disconnect();
  res.send(items);
});

handler.delete(async (req, res) => {
  await db.connect();
  const job = await UsedItems.findById(req.query.id);
  if (job) {
    await job.remove();
    await db.disconnect();
    res.send({ message: 'Job Removed from Database' });
  } else {
    await db.disconnect();
    res.status(404).send({ message: 'Job Not Found' });
  }
});

export default handler;