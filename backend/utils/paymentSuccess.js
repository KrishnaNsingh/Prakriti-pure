// const paymentSuccessTemplate = ({ name, orderId, total }) => `
//   <h2>Payment Successful 🎉</h2>
//   <p>Hi ${name},</p>

//   <p>Your payment for order <b>${orderId}</b> was successful.</p>
//   <p><b>Total Paid:</b> ₹${total}</p>

//   <p>📦 Estimated Shipping: <b>3–5 business days</b></p>

//   <p>Thank you for shopping with Prakriti Pure 🌿</p>
// `;

// export default paymentSuccessTemplate;

const paymentSuccessTemplate = (order) => {
  return `
    <h2>Order Confirmed 🎉</h2>
    <p>Thank you for your order at <b>Prakriti Pure</b></p>
    <p><b>Order ID:</b> ${order._id}</p>
    <p><b>Amount Paid:</b> ₹${order.pricing.total}</p>
    <p>We will ship your order soon.</p>
  `;
};

export default paymentSuccessTemplate;
