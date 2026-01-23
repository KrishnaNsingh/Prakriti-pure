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

// const paymentSuccessTemplate = (order) => {
//   const customerName = `${order.customer.firstName} ${order.customer.lastName}`;
//   const orderDate = new Date(order.createdAt || new Date()).toLocaleDateString("en-IN", {
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   });
//   const fullAddress = `${order.shippingAddress.address}, ${order.shippingAddress.city}, ${order.shippingAddress.state} - ${order.shippingAddress.zip}, ${order.shippingAddress.country}`;
//   const totalItems = order.cartItems.reduce((sum, item) => sum + item.quantity, 0);

//   return `
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//       <meta charset="UTF-8">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <title>Order Confirmed - Prakriti Pure</title>
//     </head>
//     <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
//       <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 20px 0;">
//         <tr>
//           <td align="center">
//             <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              
//               <!-- Header -->
//               <tr>
//                 <td style="background: linear-gradient(135deg, #2d8659 0%, #4caf7a 100%); padding: 30px 40px; text-align: center;">
//                   <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600;">🌿 Prakriti Pure</h1>
//                   <div style="margin-top: 15px; background-color: rgba(255,255,255,0.2); padding: 12px 20px; border-radius: 6px; display: inline-block;">
//                     <span style="color: #ffffff; font-size: 18px; font-weight: 500;">✓ Payment Successful</span>
//                   </div>
//                 </td>
//               </tr>

//               <!-- Main Content -->
//               <tr>
//                 <td style="padding: 40px;">
                  
//                   <!-- Greeting -->
//                   <p style="color: #333333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
//                     Hi <strong>${customerName}</strong>,
//                   </p>
                  
//                   <p style="color: #555555; font-size: 16px; line-height: 1.6; margin: 0 0 30px 0;">
//                     Thank you for your order! Your payment has been successfully processed and your order is confirmed.
//                   </p>

//                   <!-- Order Details Card -->
//                   <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8f9fa; border-radius: 6px; padding: 20px; margin-bottom: 30px;">
//                     <tr>
//                       <td>
//                         <table width="100%" cellpadding="0" cellspacing="0">
//                           <tr>
//                             <td style="padding-bottom: 10px;">
//                               <span style="color: #666666; font-size: 14px;">Order ID:</span>
//                               <span style="color: #2d8659; font-size: 14px; font-weight: 600; margin-left: 8px;">${order._id}</span>
//                             </td>
//                           </tr>
//                           <tr>
//                             <td style="padding-bottom: 10px;">
//                               <span style="color: #666666; font-size: 14px;">Order Date:</span>
//                               <span style="color: #333333; font-size: 14px; margin-left: 8px;">${orderDate}</span>
//                             </td>
//                           </tr>
//                           <tr>
//                             <td>
//                               <span style="color: #666666; font-size: 14px;">Payment ID:</span>
//                               <span style="color: #333333; font-size: 14px; margin-left: 8px;">${order.razorpayPaymentId || "N/A"}</span>
//                             </td>
//                           </tr>
//                         </table>
//                       </td>
//                     </tr>
//                   </table>

//                   <!-- Order Items -->
//                   <h3 style="color: #333333; font-size: 18px; margin: 0 0 20px 0; border-bottom: 2px solid #e8e8e8; padding-bottom: 10px;">
//                     Order Items (${totalItems} ${totalItems === 1 ? 'item' : 'items'})
//                   </h3>
                  
//                   <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
//                     ${order.cartItems
//                       .map(
//                         (item) => `
//                         <tr>
//                           <td style="padding: 15px 0; border-bottom: 1px solid #e8e8e8;">
//                             <table width="100%" cellpadding="0" cellspacing="0">
//                               <tr>
//                                 <td width="80%" style="vertical-align: top;">
//                                   <p style="color: #333333; font-size: 15px; font-weight: 500; margin: 0 0 5px 0;">
//                                     ${item.name}
//                                   </p>
//                                   <p style="color: #666666; font-size: 13px; margin: 0;">
//                                     Quantity: ${item.quantity} × ₹${item.price.toLocaleString("en-IN")}
//                                   </p>
//                                 </td>
//                                 <td width="20%" align="right" style="vertical-align: top;">
//                                   <p style="color: #2d8659; font-size: 15px; font-weight: 600; margin: 0;">
//                                     ₹${(item.price * item.quantity).toLocaleString("en-IN")}
//                                   </p>
//                                 </td>
//                               </tr>
//                             </table>
//                           </td>
//                         </tr>
//                       `
//                       )
//                       .join("")}
//                   </table>

//                   <!-- Pricing Summary -->
//                   <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
//                     <tr>
//                       <td align="right" style="padding: 10px 0;">
//                         <table cellpadding="0" cellspacing="0" style="width: 250px; margin-left: auto;">
//                           <tr>
//                             <td style="padding: 5px 0;">
//                               <span style="color: #666666; font-size: 14px;">Subtotal:</span>
//                               <span style="color: #333333; font-size: 14px; float: right;">₹${order.pricing.subtotal.toLocaleString("en-IN")}</span>
//                             </td>
//                           </tr>
//                           <tr>
//                             <td style="padding: 5px 0;">
//                               <span style="color: #666666; font-size: 14px;">Shipping:</span>
//                               <span style="color: #333333; font-size: 14px; float: right;">₹${order.pricing.shipping.toLocaleString("en-IN")}</span>
//                             </td>
//                           </tr>
//                           <tr style="border-top: 2px solid #2d8659; margin-top: 10px;">
//                             <td style="padding: 10px 0 0 0;">
//                               <span style="color: #333333; font-size: 18px; font-weight: 600;">Total Paid:</span>
//                               <span style="color: #2d8659; font-size: 20px; font-weight: 700; float: right;">₹${order.pricing.total.toLocaleString("en-IN")}</span>
//                             </td>
//                           </tr>
//                         </table>
//                       </td>
//                     </tr>
//                   </table>

//                   <!-- Shipping Address -->
//                   <h3 style="color: #333333; font-size: 18px; margin: 30px 0 15px 0; border-bottom: 2px solid #e8e8e8; padding-bottom: 10px;">
//                     Shipping Address
//                   </h3>
//                   <p style="color: #555555; font-size: 15px; line-height: 1.8; margin: 0 0 30px 0; padding: 15px; background-color: #f8f9fa; border-radius: 6px;">
//                     ${fullAddress}
//                   </p>

//                   <!-- Shipping Info -->
//                   <div style="background-color: #e8f5e9; border-left: 4px solid #2d8659; padding: 15px 20px; border-radius: 4px; margin-bottom: 30px;">
//                     <p style="color: #2d8659; font-size: 14px; margin: 0; font-weight: 500;">
//                       📦 Your order will be shipped within <strong>3-5 business days</strong>. You'll receive a tracking number once your order ships.
//                     </p>
//                   </div>

//                   <!-- Footer Message -->
//                   <p style="color: #555555; font-size: 15px; line-height: 1.6; margin: 30px 0 0 0; text-align: center;">
//                     Thank you for choosing <strong style="color: #2d8659;">Prakriti Pure</strong>! 🌿
//                   </p>
//                   <p style="color: #888888; font-size: 13px; line-height: 1.6; margin: 20px 0 0 0; text-align: center;">
//                     If you have any questions, please don't hesitate to contact us.
//                   </p>

//                 </td>
//               </tr>

//               <!-- Footer -->
//               <tr>
//                 <td style="background-color: #f8f9fa; padding: 20px 40px; text-align: center; border-top: 1px solid #e8e8e8;">
//                   <p style="color: #888888; font-size: 12px; margin: 0;">
//                     © ${new Date().getFullYear()} Prakriti Pure. All rights reserved.
//                   </p>
//                 </td>
//               </tr>

//             </table>
//           </td>
//         </tr>
//       </table>
//     </body>
//     </html>
//   `;
// };

// export default paymentSuccessTemplate;
