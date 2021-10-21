const nodemailer = require("nodemailer");

// Create reusable transporter object using SMTP transport.
const transporter = nodemailer.createTransport({
  service: process.env.MAIL_PROVIDER,
  // host:'smtp.gmail.com',
  // port:465,
  // secure:true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_APP_PASS,
  },
});

module.exports = {
  send: (from, to, subject, text) => {
    // Setup e-mail data.
    const options = {
      from,
      to,
      subject,
      text,
    };

    console.log("mail service working");
    // Return a promise of the function that sends the email.
    return transporter.sendMail(options);
  },
};
