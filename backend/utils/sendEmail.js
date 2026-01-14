// import nodemailer from "nodemailer";

// const transporter = nodemailer.createTransport({
//   // service: "gmail",
//   host: "smtp.gmail.com",
//   port: 465,
//   secure: true,
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// const sendEmail = async ({ to, subject, html }) => {
//    try {
//       console.log("📧 Attempting email to:", to);
//       // Your email sending logic goes here, e.g.:
//       // await sendEmail(to); 
//     } catch (err) {
//       console.error("EMAIL SEND ERROR:", err);
//     }
//   await transporter.sendMail({
//     from: `"Prakriti Pure" <${process.env.EMAIL_USER}>`,
//     to,
//     subject,
//     html,
//   });
 
// };

// export default sendEmail;

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async ({ to, subject, html }) => {
  return await resend.emails.send({
    from: "Prakriti Pure <orders@prakriti-pure.com>", // works immediately
    to,
    subject,
    html,
  });
};

export default sendEmail;

