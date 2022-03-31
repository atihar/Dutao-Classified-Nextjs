// pages/api/upload-url.js

import aws from 'aws-sdk';

export default async function handler(req, res) {

  const s3 = new aws.S3({
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_KEY,
    region: process.env.REGION,
    signatureVersion: 'v4',
  });
  
  const params = {
      Bucket: process.env.BUCKET_NAME,
      Key: req.query.file
  };

  
  s3.deleteObject(params, (error, data) => {
    if (error) {
      res.status(500).send(error);
    }
    res.status(200).send("File has been deleted successfully");
    console.log("from s3 delete object");
  });
  

}