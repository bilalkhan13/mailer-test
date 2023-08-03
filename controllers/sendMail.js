const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const sendMail = async (req, res) => {

  //Connect with the SMTP
  const transporter = await nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    secure: false,
    port: 587,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_APP_PWD,
    },
  });

  let message = {
    from: process.env.EMAIL_USER, // sender address
    to: process.env.SENDER_MAIL, // list of receivers
    subject: 'Test ✔', // Subject line
    text: 'Hello world?', // plain text body
    html: '<b>Hello world?</b>', // html body
  };
  // send mail with defined transport object
  const info = await transporter
    .sendMail(message)
    .then(() => {
      return res.status(201).json({ message: 'You should receive an email.' });
    })
    .catch((error) => {
      return res.status(500).json({ error: 'Error Sending email.' });
    });
};

module.exports = sendMail;
