// MUST be first — no imports before this
import "./env.js";

import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import webhookRoutes from "./routes/webhookRoutes.js";
import testRoutes from "./routes/testRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import paymentRoutes from "./routes/webhookRoutes.js";
import rateLimit from 'express-rate-limit';

connectDB();

const app = express();
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use("/api/webhook", webhookRoutes);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/test", testRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/payment", paymentRoutes);
app.use('/api/', limiter);

app.get("/", (req, res) => {
  res.send("Prakriti Pure Backend is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
