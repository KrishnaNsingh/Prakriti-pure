import express from "express";
import razorpayInstance from "../config/razorpay.js";
import Order from "../models/Order.js";

const router = express.Router();

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

export default router;
