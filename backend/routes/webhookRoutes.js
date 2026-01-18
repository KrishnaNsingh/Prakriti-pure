import express from "express";
import crypto from "crypto";
import Order from "../models/Order.js";
import sendEmail from "../utils/sendEmail.js";
import paymentSuccessTemplate from "../utils/paymentSuccess.js";
import paymentFailureTemplate from "../utils/paymentFailure.js";

const router = express.Router();

router.post(
  "/razorpay",
  express.raw({ type: "application/json" }),
  async (req, res) => {
    try {
      const secret = process.env.RAZORPAY_WEBHOOK_SECRET;

      const receivedSignature = req.headers["x-razorpay-signature"];

      const expectedSignature = crypto
        .createHmac("sha256", secret)
        .update(req.body.toString())
        .digest("hex");

      if (receivedSignature !== expectedSignature) {
        console.log("❌ Invalid webhook signature");
        return res.status(400).send("Invalid signature");
      }

      const event = JSON.parse(req.body.toString());
      console.log("🔥 WEBHOOK EVENT:", event.event);

      // ✅ PAYMENT SUCCESS
      if (event.event === "payment.captured") {
        const payment = event.payload.payment.entity;

        const razorpayOrderId = payment.order_id;
        const razorpayPaymentId = payment.id;

        const order = await Order.findOne({ razorpayOrderId });

        if (!order) {
          console.log("❌ Order not found for:", razorpayOrderId);
          return res.status(200).json({ ok: true });
        }

        if (order.paymentStatus !== "paid") {
          order.paymentStatus = "paid";
          order.razorpayPaymentId = razorpayPaymentId;
          order.paidAt = new Date();
          await order.save();

          await sendEmail(
            order.customer.email,
            "Payment Successful - Prakriti Pure",
            paymentSuccessTemplate(order)
          );

          console.log("✅ Order marked PAID:", order._id);
        }
      }

      // ❌ PAYMENT FAILED
      if (event.event === "payment.failed") {
        const payment = event.payload.payment.entity;
        const razorpayOrderId = payment.order_id;

        const order = await Order.findOne({ razorpayOrderId });

        if (order && order.paymentStatus !== "failed") {
          order.paymentStatus = "failed";
          await order.save();

          await sendEmail(
            order.customer.email,
            "Payment Failed - Prakriti Pure",
            paymentFailureTemplate(order)
          );

          console.log("❌ Order marked FAILED:", order._id);
        }
      }

      res.status(200).json({ ok: true });
    } catch (err) {
      console.error("🔥 Webhook error:", err);
      res.status(200).json({ ok: true }); // still ACK
    }
  }
);

export default router;
