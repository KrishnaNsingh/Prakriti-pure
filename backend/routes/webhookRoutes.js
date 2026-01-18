import express from "express";
import crypto from "crypto";
import Order from "../models/Order.js";
import sendEmail from "../utils/sendEmail.js";
import paymentSuccessTemplate from "../utils/paymentSuccess.js";
import paymentFailureTemplate from "../utils/paymentFailure.js";

const router = express.Router();

// IMPORTANT: raw body needed for signature verification
router.post(
  "/razorpay",
  express.raw({ type: "application/json" }),
  async (req, res) => {
    try {
      const secret = process.env.RAZORPAY_WEBHOOK_SECRET;

      const receivedSignature = req.headers["x-razorpay-signature"];
      const expectedSignature = crypto
        .createHmac("sha256", secret)
        .update(req.body)
        .digest("hex");

      if (receivedSignature !== expectedSignature) {
        return res.status(400).json({ message: "Invalid webhook signature" });
      }

      const event = JSON.parse(req.body.toString());

      // ✅ PAYMENT SUCCESS
      if (event.event === "payment.captured") {
        const payment = event.payload.payment.entity;
        const razorpayOrderId = payment.order_id;

        const order = await Order.findOne({ razorpayOrderId });
        console.log("🔥 WEBHOOK EVENT:", req.body.event);
console.log("🔎 ORDER ID:", orderIdFromWebhook);

        if (!order) {
          console.log("❌ Order not found for:", orderIdFromWebhook);
          return res.status(200).json({ ok: true }); // still ACK webhook
        }

        if (order.paymentStatus !== "paid") {
          order.paymentStatus = "paid";
          order.razorpayPaymentId = razorpay_payment_id;
          order.paidAt = new Date();
          await order.save();

          await sendEmail(
            order.customer.email,
            "Payment Successful - Prakriti Pure",
            paymentSuccessTemplate(order),
          );
        }
      }

      // ❌ PAYMENT FAILED
      if (event.event === "payment.failed") {
        const payment = event.payload.payment.entity;
        const razorpayOrderId = payment.order_id;

        const order = await Order.findOne({ razorpayOrderId });

        if (order.paymentStatus !== "failed") {
          order.paymentStatus = "failed";
          await order.save();

          await sendEmail(
            order.customer.email,
            "Payment Failed - Prakriti Pure",
            paymentFailureTemplate(order),
          );
        }
      }

      res.json({ status: "ok" });
    } catch (err) {
      console.error("Webhook error:", err);
      res.status(500).json({ error: "Webhook handler failed" });
    }
  },
);

export default router;
