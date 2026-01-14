import express from "express";
import crypto from "crypto";
import razorpayInstance from "../config/razorpay.js";
import Order from "../models/Order.js";
import sendEmail from "../utils/sendEmail.js";
// import { paymentSuccessTemplate, paymentFailureTemplate } from "../utils/paymentTemplates.js"; 
import paymentSuccessTemplate from "../utils/paymentSuccess.js";
import paymentFailureTemplate from "../utils/paymentFailure.js";


// console.log("✅ paymentRoutes loaded");

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

    

    // 3. Find order by Razorpay order ID
    const order = await Order.findOne({ razorpayOrderId: razorpay_order_id });

    


    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // 4. Update order status
    order.paymentStatus = "paid"; 
    order.razorpayPaymentId = razorpay_payment_id;
    order.paidAt = new Date();

    await order.save();

    res.status(200).json({
      success: true,
      // message: "Payment verified successfully",
      orderId: order._id,
      // paymentStatus: order.paymentStatus,  
    });

    sendEmail({
      to: order.customer.email,
      subject: "Order Confirmed – Prakriti Pure 🌿",
      html: paymentSuccessTemplate(order),
    }).catch(console.error);

  } catch (error) {
    // res.status(500).json({ message: error.message });
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Payment verification failed and Internal server error",
    });
  }
});

// router.post("/failure", async (req, res) => {
//   // const { orderId } = req.body;
//   if (order.paymentStatus === "paid") {
//     return res.status(400).json({ message: "Order already paid" });
//   }

//   const order = await Order.findById(orderId);
//   if (!order) return res.status(404).json({});

//   order.paymentStatus = "failed";   ❗ any one can over write
//   await order.save();

//   await sendEmail(
//     order.customer.email,
//     "Payment Failed - Prakriti Pure",
//     paymentFailureTemplate(order)
//   );

//   res.json({ success: true });
// });
router.post("/failure", async (req, res) => {
  try {
    const { orderId } = req.body;
    if (!orderId) {
      return res.status(400).json({ message: "Order ID required" });
    }

    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // ❗ Prevent overwriting a paid order
    if (order.paymentStatus === "paid") {
      return res.status(400).json({ message: "Order already paid" });
    }

    order.paymentStatus = "failed";
    await order.save();

    // Respond FIRST
    res.json({ success: true });

    // Email as side-effect (non-blocking)
    // sendEmail(
    //   order.customer.email,
    //   "Payment Failed - Prakriti Pure",
    //   paymentFailureTemplate(order)
    // ).catch(console.error);
    sendEmail({
      to: order.customer.email,
      subject: "Payment Failed – Prakriti Pure 🌿",
      html: paymentFailureTemplate(order),
    }).catch(console.error);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// router.get("/email-test", async (req, res) => {
//   try {
//     // await sendEmail(
//     //   "krishna65255@gmail.com",
//     //   "Test Email – Prakriti Pure",
//     //   "<h1>Email system works ✅</h1>"
//     // );
//     await sendEmail({
//       to: "krishna65255@gmail.com",
//       subject: "Test Email",
//       html: "<h1>Works</h1>",
//     });
//     res.send("Email sent");
//   } catch (err) {
//     console.error("EMAIL ERROR 👉", err);   // 👈 THIS
//     res.status(500).send("Email failed");
//   }
// });
router.get("/email-test", async (req, res) => {
  try {
    await sendEmail({
      to: "krishnanarayansingh65@gmail.com",
      subject: "Resend Test – Prakriti Pure",
      html: "<h1>Resend works 🎉</h1>",
    });
    res.send("Email sent");
  } catch (err) {
    console.error(err);
    res.status(500).send("Email failed");
  }
});




export default router;
