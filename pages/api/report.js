import nc from 'next-connect';
import db from '../../lib/dbConnect';
import Reports from '../../models/reports'


const handler = nc();
// handler.use(isAuth)

handler.post(async (req, res) => {
  await db.connect();
  const newReport = new Reports({
    adId: req.body.adId,
    category: req.body.category,
    email: "atihar@dutao.org",
    report: req.body.report,
    status: "open"
  });

  const Report = await newReport.save();
  await db.disconnect();

  res.send(Report).status(201);
});

handler.get(async (req, res, id) => {
  await db.connect();
  const Report = await Reports.find(id);
  await db.disconnect();
  res.send(Report);
});

handler.delete(async (req, res) => {
  await db.connect();
  const report = await Reports.findById(req.query.id);
  if (report) {
    await report.remove();
    await db.disconnect();
    res.send({ message: 'Report Removed/Resolved' });
  } else {
    await db.disconnect();
    res.status(404).send({ message: 'Report Not Found' });
  }
});

export default handler;