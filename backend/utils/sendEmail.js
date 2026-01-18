

import { Resend } from "resend";

// if (!process.env.RESEND_API_KEY) {
//   throw new Error("❌ RESEND_API_KEY is missing in environment variables");
// }
export function assertEmailConfig() {
  if (!process.env.RESEND_API_KEY) {
    console.error("❌ RESEND_API_KEY missing");
    return false;
  }
  return true;
}


const resend = new Resend(process.env.RESEND_API_KEY);

export default async function sendEmail(to, subject, html) {
  if (!assertEmailConfig()) return;
  try {
    await resend.emails.send({
      from: "Prakriti Pure <no-reply@prakriti-pure.com>",
      to,
      subject,
      html,
    });
    console.log("📧 Email sent to:", to);
  } catch (err) {
    console.error("📧 Email error:", err);
  }
}

