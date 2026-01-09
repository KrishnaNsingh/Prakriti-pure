export const paymentFailureTemplate = ({ name, orderId }) => `
  <h2>Payment Failed ❌</h2>
  <p>Hi ${name},</p>

  <p>Your payment for order <b>${orderId}</b> could not be completed.</p>

  <p>You can retry payment from your account.</p>

  <p>— Prakriti Pure</p>
`;
