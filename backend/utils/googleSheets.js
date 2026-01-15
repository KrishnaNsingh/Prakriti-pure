import { google } from "googleapis";
import path from "path";

const auth = new google.auth.GoogleAuth({
  //   keyFile: path.join(process.cwd(), "config/googleServiceAccount.json"),  // made .env on render...
  credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT),
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});


export const appendOrderToSheet = async (order) => {
  const sheets = google.sheets({ version: "v4", auth });
  const istDate = new Date(order.createdAt).toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
  });

  const fullAddress = `${order.shippingAddress.address}, ${order.shippingAddress.city}, ${order.shippingAddress.state} - ${order.shippingAddress.zip}, ${order.shippingAddress.country}`;

  const values = [
    [
      order._id.toString(),
      `${order.customer.firstName} ${order.customer.lastName}`,
      order.customer.email,
      order.customer.phone,
      order.cartItems.map((i) => `${i.name} (x${i.quantity})`).join(", "),
      order.cartItems.reduce((s, i) => s + i.quantity, 0),
      order.pricing.total,
      order.paymentStatus,
      order.razorpayPaymentId || "-",
    //   new Date(order.createdAt).toLocaleString(),
      istDate,
      "Incomplete",
      fullAddress,
    ],
  ];

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: "Sheet1!A:L",
    valueInputOption: "USER_ENTERED",
    requestBody: { values },
  });
};
