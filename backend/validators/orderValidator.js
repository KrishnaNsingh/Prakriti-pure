import { body } from "express-validator";

export const createOrderValidator = [
  body("customer.email").isEmail().normalizeEmail(),
  body("customer.phone").matches(/^[6-9]\d{9}$/),
  body("cartItems").isArray({ min: 1 }),
  body("cartItems.*.productId").isMongoId(),
  body("cartItems.*.quantity").isInt({ min: 1 })
];
