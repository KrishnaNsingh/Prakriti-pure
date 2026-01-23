import express from "express";
import Order from "../models/Order.js";
import { createOrderValidator } from "../validators/orderValidator.js";
import { validate } from "../middlewares/validate.js";
import rateLimiter from "../middlewares/rateLimiter.js";

const router = express.Router();

router.post(
  "/create",
  rateLimiter,
  createOrderValidator,
  validate,
  async (req, res) => {
    try {
      const order = await Order.create(req.body);
      res.status(201).json(order);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
);

export default router;
