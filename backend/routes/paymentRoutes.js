import express from "express";
import crypto from "crypto";
import razorpayInstance from "../config/razorpay.js";
import Order from "../models/Order.js";
import sendEmail from "../utils/sendEmail.js";
// import { paymentSuccessTemplate, paymentFailureTemplate } from "../utils/paymentTemplates.js"; 
import paymentSuccessTemplate from "../utils/paymentSuccess.js";
import paymentFailureTemplate from "../utils/paymentFailure.js";


console.log("✅ paymentRoutes loaded");

const router = express.Router();
router.get("/test", (req, res) => {
  res.send("PAYMENT ROUTE WORKS");
});

router.post("/create-order", async (req, res) => {
  try {
    const { orderId } = req.body;

    // 1. Find order from DB
    const order = await Order.findById(orderId);
    if (!order) return res.status(404).json({ message: "Order not found" });

    // 2. Create Razorpay order
    const razorpayOrder = await razorpayInstance.orders.create({
      amount: order.pricing.total * 100, // INR → paise
      currency: "INR",
      receipt: order._id.toString(),
    });

    // 3. Save Razorpay order id
    order.razorpayOrderId = razorpayOrder.id;
    await order.save();

    res.json(razorpayOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

console.log("krishna");


router.post("/verify", async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = req.body;


    // 1. Generate signature
    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body.toString())
      .digest("hex");

    // 2. Compare signatures
    const isAuthentic = expectedSignature === razorpay_signature;

    if (!isAuthentic) {
      return res.status(400).json({ message: "Invalid payment signature" });
    }

    
    console.log("VERIFY RECEIVED:", razorpay_order_id);

    // 3. Find order by Razorpay order ID
    const order = await Order.findOne({ razorpayOrderId: razorpay_order_id });

    console.log("ORDER FOUND:", !!order);


    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // 4. Update order status
    order.paymentStatus = "paid";
    order.razorpayPaymentId = razorpay_payment_id;
    order.paidAt = new Date();

    await order.save();
    console.log("VERIFY for Razorpay Order:", razorpay_order_id);
    console.log("FOUND ORDER:", order?._id);

    // (Email will be added after this step)
    // res.json({ success: true, orderId: order._id });
    res.status(200).json({
      success: true,
      message: "Payment verified successfully",
      orderId: order._id,
      paymentStatus: order.paymentStatus,  
});
  } catch (error) {
    // res.status(500).json({ message: error.message });
    return res.status(400).json({
      success: false,
      message: "Payment verification failed",
    });
  }
});


export default router;
