# 🌿 Prakriti Pure – Full Stack Ecommerce Platform

Prakriti Pure is a **full‑stack ecommerce application** built with a modern MERN-style architecture, focused on **clean UX, secure payments, admin-friendly order management, and scalability**.

This project was built step‑by‑step with production practices in mind, even while using free tiers during development.

---

## ✨ Features

### 🛍️ Frontend (React + Vite)

* Modern responsive UI (Desktop + Mobile)
* Product listing & product details pages
* Cart management using React Context
* Checkout flow with form validation
* Razorpay UPI & Card payment integration
* Payment success & failure pages
* Sticky mobile CTAs & clean UX patterns
* Google‑style toast notifications

### ⚙️ Backend (Node.js + Express)

* REST API architecture
* MongoDB database with Mongoose
* Secure Razorpay payment creation & verification
* Email notifications (order success / failure)
* Google Sheets integration for admin order tracking
* Environment‑based configuration

### 📊 Admin (Google Sheets)

* Orders auto‑synced after successful payment
* Manual **Completed / Incomplete** fulfillment toggle
* No admin panel needed initially
* Zero risk to database integrity

---

## 🧱 Tech Stack

### Frontend

* React (Vite)
* TypeScript
* Tailwind CSS
* Axios
* React Router

### Backend

* Node.js
* Express.js
* MongoDB + Mongoose
* Razorpay SDK
* Nodemailer / Resend
* Google Sheets API

### Hosting

* Frontend: **Vercel**
* Backend: **Render** (free tier during development)
* Database: **MongoDB Atlas**

---

## 📁 Project Structure

```
prakriti-pure/
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── context/
│   │   ├── utils/
│   │   └── main.tsx
│   └── .env
│
├── backend/
│   ├── config/
│   │   ├── db.js
│   │   └── razorpay.js
│   ├── models/
│   │   └── Order.js
│   ├── routes/
│   │   ├── orderRoutes.js
│   │   └── paymentRoutes.js
│   ├── utils/
│   │   ├── sendEmail.js
│   │   ├── googleSheets.js
│   │   ├── paymentSuccess.js
│   │   └── paymentFailure.js
│   ├── server.js
│   └── .env
│
└── README.md
```

---

## 🔐 Environment Variables

### Frontend `.env` (Vercel / Local)

```env
VITE_API_BASE_URL=http://localhost:5000
VITE_RAZORPAY_KEY_ID=rzp_test_xxxxxxxxx
```

> ⚠️ Frontend env variables **must start with `VITE_`**

---

### Backend `.env` (Render / Local)

```env
PORT=5000

MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/prakritiPureDB

RAZORPAY_KEY_ID=rzp_test_xxxxxxxxx
RAZORPAY_KEY_SECRET=xxxxxxxxx

EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password_or_api_key

GOOGLE_SHEET_ID=xxxxxxxxxxxxxxxxxxxx
GOOGLE_SERVICE_ACCOUNT={JSON_STRING_HERE}
```

---

## 💳 Payment Flow (Razorpay)

1. User fills checkout form
2. Order is created in MongoDB (status: `pending`)
3. Backend creates Razorpay order
4. Razorpay popup opens (UPI / Card)
5. On success:

   * Signature is verified on backend
   * Order status updated to `paid`
   * Email sent to user
   * Order appended to Google Sheet
6. User redirected to success page

---

## 📧 Email System

* Email sent only **after payment verification**
* Uses backend email utility (Nodemailer / Resend)
* Supports:

  * Payment success email
  * Payment failure email

> Production emails require a **custom domain** (e.g. `orders@prakriti-pure.com`)

---

## 📊 Google Sheets Admin Flow

* Orders auto‑append after payment success
* Each row includes:

  * Order ID
  * Customer details
  * Product + quantity breakdown
  * Total amount
  * Payment status
  * Fulfillment status (manual dropdown)

> Google Sheets is **not synced back to DB** — it is admin‑only.

---

## 🕒 Timezone Handling

<!---* MongoDB stores all timestamps in **UTC**
* Converted to **IST** when displaying:

```js
new Date(order.createdAt).toLocaleString("en-IN", {
  timeZone: "Asia/Kolkata",
});
```

--->

## 🚀 Deployment Notes

### Frontend (Vercel)

* Push repo to GitHub
* Import project into Vercel
* Add frontend env variables

### Backend (Render)

* Create Web Service
* Connect GitHub repo
* Add backend env variables
* Deploy

> Free tier sleeps when inactive — upgrade for production use

---

## 🛡️ Security Practices

* Payment verification done on backend only
* Secrets stored in environment variables
* No sensitive files committed
* DB is single source of truth
* Admin tools never mutate DB

---

## 🧭 Future Improvements

* Admin dashboard (React)
* Order fulfillment syncing
* Webhook‑based payment handling
* Live Razorpay mode
* Custom domain & branded emails
* Performance & caching

---

## 🤝 Contributing

1. Fork the repository
2. Create a new branch
3. Add features or fixes
4. Submit a pull request

Please ensure:

* No secrets are committed
* `.env.example` is updated if needed

---

## 🧡 Acknowledgements

Built with patience, debugging, caffeine, and a lot of learning.

This project reflects **real‑world full‑stack engineering practices**, not just tutorials.

---

## 📄 License

MIT License

---

**Prakriti Pure** — Clean code. Clean UX. Clean products 🌿
