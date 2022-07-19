//api for user verify check and then activated
import nc from 'next-connect';
import jwt from 'jsonwebtoken';

const handler = nc();

handler.post(async (req, res, next) => {
        const { token } = req.query;
        if (token) {
          jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
            if (err) {
              res.status(201).send({ message: 'Token is not valid' });
            } else {
                res.status(200).send({ message: 'user is authenticated via auth0' });
            }
          });
        }
})
  

export default handler;