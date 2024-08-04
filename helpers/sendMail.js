require("dotenv").config();
const nodeMailer = require("nodemailer");
const transporter = nodeMailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.MAIL,
    pass: process.env.PASSWORD,
  },
});

async function sendMail(object = any) {
  try {
    await transporter.sendMail({
      from: process.env.MAIL,
      to: object.to,
      subject: object.subject,
      text: object.message,
      html: object.html,
    });
  } catch (error) {
    console.error(error);
  }
}

module.exports = sendMail;
