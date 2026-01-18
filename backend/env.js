import dotenv from "dotenv";
dotenv.config();

if (!process.env.RESEND_API_KEY) {
  console.error("❌ RESEND_API_KEY missing at bootstrap");
}
