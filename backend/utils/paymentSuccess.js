export const paymentSuccessTemplate = ({ name, orderId, total }) => `
  <h2>Payment Successful 🎉</h2>
  <p>Hi ${name},</p>

  <p>Your payment for order <b>${orderId}</b> was successful.</p>
  <p><b>Total Paid:</b> ₹${total}</p>

  <p>📦 Estimated Shipping: <b>3–5 business days</b></p>

  <p>Thank you for shopping with Prakriti Pure 🌿</p>
`;
