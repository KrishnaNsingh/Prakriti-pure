import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    customer: {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      email: { type: String, required: true },
      phone: { type: String, required: true },
    },

    shippingAddress: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      zip: { type: String, required: true },
      country: { type: String, required: true },
    },

    cartItems: [
      {
        productId: { type: String }, // or ObjectId later
        name: { type: String, required: true },
        image: { type: String },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
      },
    ],

    pricing: {
      subtotal: { type: Number, required: true },
      shipping: { type: Number, required: true },
      total: { type: Number, required: true },
    },

    paymentStatus: {
      type: String,
      default: "pending", // later: paid / failed
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
