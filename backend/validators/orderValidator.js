import { body } from "express-validator";

export const createOrderValidator = [
  body("customer.firstName").notEmpty(),
  body("customer.lastName").notEmpty(),
  body("customer.email").isEmail(),
  body("customer.phone").matches(/^[6-9]\d{9}$/),

  body("shippingAddress.address").notEmpty(),
  body("shippingAddress.city").notEmpty(),
  body("shippingAddress.state").notEmpty(),
  body("shippingAddress.zip").notEmpty(), // NOT isPostalCode yet
  body("shippingAddress.country").notEmpty(),

  body("cartItems").isArray({ min: 1 }),
  body("cartItems.*.productId").isString(),   // 🔥 THIS FIX
  body("cartItems.*.name").notEmpty(),
  body("cartItems.*.price").isNumeric(),
  body("cartItems.*.quantity").isInt({ min: 1 }),

  body("pricing.subtotal").isNumeric(),
  body("pricing.shipping").isNumeric(),
  body("pricing.total").isNumeric(),
];
