// Import nodemailer and dotenv
const nodemailer = require("nodemailer");
require("dotenv").config();

const path = require("path");

// Define the send_Email function
const send_Email = (recipientEmail, verificationCode) => {
  // Create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.USER, // Sender gmail address
      pass: process.env.APP_PASSWORD, // App password from Gmail account
    },
  });

  // Define mail options
  const mailOptions = {
    from: {
      name: "krish sharvesh",
      address: process.env.USER,
    }, // Sender address
    to: recipientEmail, // Recipient's email address
    subject: "Verification Code", // Subject line
    text: `Your verification code is: ${verificationCode}`, // Plain text body
    html: `<b>Your verification code is: ${verificationCode}</b>`, // HTML body
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log("Email has been sent:", info.response);
    }
  });
};

// Export the send_Email function
module.exports = { send_Email };
