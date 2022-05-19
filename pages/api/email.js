
export default function (req, res) {

    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: 'dutao.ae@gmail.com',
        pass: process.env.EMAIL_PASSWORD,
      },
      secure: true,
    })

    const mailData = {
      from: 'no-reply@dutao.com',
      to: 'mahir.mahir890@gmail.com',
      subject: `Complete your registration`,
      text: "Hello from the otherside",
      html: `<div>"Hello from the otherside"</div>`
    }

    transporter.sendMail(mailData, function (err, info) {
      if(err)
        console.log(err)
      else
        console.log(info)
    })
    res.status(200)
  }