// MUST be first — no imports before this
import "./env.js";

import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import webhookRoutes from "./routes/webhookRoutes.js";
import testRoutes from "./routes/testRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import paymentRoutes from "./routes/webhookRoutes.js";

connectDB();

const app = express();
const requiredEnvVars = ['MONGO_URI', 'RAZORPAY_KEY_ID', 'RAZORPAY_KEY_SECRET'];
requiredEnvVars.forEach(varName => {
  if (!process.env[varName]) {
    console.error(`Missing required environment variable: ${varName}`);
    process.exit(1);
  }
});

app.use("/api/webhook", webhookRoutes);
app.use(
  cors({
    origin: (origin, callback) => {
      const allowed = process.env.ALLOWED_ORIGINS?.split(",");

      // Allow server-to-server, webhooks, Postman
      if (!origin) return callback(null, true);

      if (allowed.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("CORS not allowed"));
      }
    },
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/test", testRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/payment", paymentRoutes);


app.get("/", (req, res) => {
  res.send("Prakriti Pure Backend is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
