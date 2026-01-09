import express from "express";
import Test from "../models/Test.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const data = await Test.create({ message: "MongoDB Connected Successfully" });
  res.json(data);
});

export default router;
