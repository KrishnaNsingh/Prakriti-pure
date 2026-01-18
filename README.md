# 🌿 Prakriti Pure – Full Stack Ecommerce Platform

Prakriti Pure is a **full‑stack ecommerce application** built with a modern MERN-style architecture, focused on **clean UX, secure payments, admin-friendly order management, and scalability**.

This project was built step‑by‑step with production practices in mind, even while using free tiers during development.

---

## 📋 Table of Contents

- [Features](#-features)
- [Recent Improvements](#-recent-improvements-january-2025)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Payment Flow](#-payment-flow)
- [Email System](#-email-system)
- [Google Sheets Integration](#-google-sheets-integration)
- [Security Practices](#-security-practices)
- [Deployment](#-deployment)
- [Roadmap & Future Improvements](#-roadmap--future-improvements)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

### 🛍️ Frontend (React + Vite)

* Modern responsive UI (Desktop + Mobile)
* Product listing & product details pages
* Cart management using React Context
* Checkout flow with form validation
* Razorpay UPI & Card payment integration
* Beautiful payment success & failure pages
* Sticky mobile CTAs & clean UX patterns
* Google‑style toast notifications
* Professional email templates

### ⚙️ Backend (Node.js + Express)

* REST API architecture
* MongoDB database with Mongoose
* Secure Razorpay payment creation & verification
* Email notifications (order success / failure)
* Google Sheets integration for admin order tracking
* Environment‑based configuration
* Webhook support for payment events

### 📊 Admin (Google Sheets)

* Orders auto‑synced after successful payment
* Manual **Completed / Incomplete** fulfillment toggle
* No admin panel needed initially
* Zero risk to database integrity

---

## ✅ Recent Improvements (January 2025)

### 1. **Payment Success Email Template**
- ✅ Professional, responsive HTML email template
- ✅ Branded design with green gradient header
- ✅ Comprehensive order details (ID, date, items, pricing, address)
- ✅ Table-based layout for maximum email client compatibility
- ✅ Clean, modern design with proper typography

### 2. **Payment Success Page Redesign**
- ✅ Complete UI overhaul with modern, professional design
- ✅ Animated success icon with pulsing ring effects
- ✅ Green gradient header matching brand identity
- ✅ Clean card-based layout with proper spacing
- ✅ Informational boxes for shipping timeline and order status
- ✅ Responsive design for mobile and desktop

### 3. **Code Quality Improvements**
- ✅ Fixed Google Sheets service account variable declaration issue
- ✅ Removed commented code from checkout flow
- ✅ Improved code readability and maintainability

### 4. **Email Template Structure Fix**
- ✅ Template now properly uses order object structure
- ✅ Handles missing fields gracefully
- ✅ Proper date formatting for Indian locale

---

## 🧱 Tech Stack

### Frontend

* **React 18+** (Vite)
* **TypeScript** for type safety
* **Tailwind CSS** for styling
* **Axios** for API calls
* **React Router** for navigation
* **Lucide React** for icons
* **Sonner** for toast notifications

### Backend

* **Node.js** runtime
* **Express.js** web framework
* **MongoDB** with **Mongoose** ODM
* **Razorpay SDK** for payments
* **Resend** / **Nodemailer** for emails
* **Google Sheets API** for order tracking
* **dotenv** for environment management

### Hosting

* Frontend: **Vercel**
* Backend: **Render** (free tier during development)
* Database: **MongoDB Atlas**

---

## 📁 Project Structure

```
prakriti-pure/
├── src/                          # Frontend source
│   ├── pages/                   # Page components
│   │   ├── HomePage.tsx
│   │   ├── ShopPage.tsx
│   │   ├── CartPage.tsx
│   │   ├── CheckoutPage.tsx
│   │   ├── PaymentSuccess.tsx
│   │   └── PaymentFailed.tsx
│   ├── components/              # Reusable components
│   │   ├── ui/                 # UI primitives
│   │   └── ...
│   ├── context/                # React Context (Cart)
│   ├── types/                  # TypeScript types
│   └── App.tsx
│
├── backend/                     # Backend source
│   ├── config/                 # Configuration
│   │   ├── db.js
│   │   └── razorpay.js
│   ├── models/                 # Mongoose models
│   │   └── Order.js
│   ├── routes/                 # API routes
│   │   ├── orderRoutes.js
│   │   ├── paymentRoutes.js
│   │   └── webhookRoutes.js
│   ├── utils/                  # Utility functions
│   │   ├── sendEmail.js
│   │   ├── googleSheets.js
│   │   ├── paymentSuccess.js
│   │   └── paymentFailure.js
│   └── server.js
│
├── IMPROVEMENT_REPORT.md        # Detailed improvement analysis
└── README.md                    # This file
```

---

## 🚀 Getting Started

### Prerequisites

* Node.js 18+ and npm/yarn
* MongoDB Atlas account (or local MongoDB)
* Razorpay account (test mode)
* Google Cloud account (for Sheets API)
* Resend account (for emails) or SMTP credentials

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Prakriti_pure
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

4. **Set up environment variables** (see [Environment Variables](#-environment-variables) section)

5. **Start development servers**

   Frontend:
   ```bash
   npm run dev
   ```

   Backend:
   ```bash
   cd backend
   npm run dev  # or nodemon server.js
   ```

---

## 🔐 Environment Variables

### Frontend `.env`

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=http://localhost:5000
VITE_RAZORPAY_KEY_ID=rzp_test_xxxxxxxxx
```

> ⚠️ **Important:** Frontend env variables **must start with `VITE_`** to be accessible in the app.

### Backend `.env`

Create a `.env` file in the `backend/` directory:

```env
# Server
PORT=5000

# Database
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/prakritiPureDB

# Razorpay
RAZORPAY_KEY_ID=rzp_test_xxxxxxxxx
RAZORPAY_KEY_SECRET=xxxxxxxxx
RAZORPAY_WEBHOOK_SECRET=your_webhook_secret

# Email (Resend)
RESEND_API_KEY=re_xxxxxxxxx

# OR Email (SMTP)
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password_or_api_key

# Google Sheets
GOOGLE_SHEET_ID=xxxxxxxxxxxxxxxxxxxx
GOOGLE_SERVICE_ACCOUNT={JSON_STRING_HERE}
# OR
GOOGLE_SERVICE_ACCOUNT_BASE64=base64_encoded_json_string
```

---

## 💳 Payment Flow (Razorpay)

1. User fills checkout form with shipping details
2. Order is created in MongoDB (status: `pending`)
3. Backend creates Razorpay order with order amount
4. Razorpay payment popup opens (UPI / Card)
5. On successful payment:
   * Signature is verified on backend
   * Order status updated to `paid`
   * Confirmation email sent to user
   * Order appended to Google Sheet
   * User redirected to success page
6. On payment failure:
   * Order status updated to `failed`
   * Failure email sent to user
   * User redirected to failure page

### Webhook Support

The application also supports Razorpay webhooks for payment events:
- `payment.captured` - Payment success
- `payment.failed` - Payment failure

---

## 📧 Email System

* Emails sent **only after payment verification**
* Uses **Resend** API (recommended) or **Nodemailer** with SMTP
* Professional HTML email templates with:
  * Branded header design
  * Complete order details
  * Itemized product list
  * Pricing breakdown
  * Shipping address
  * Shipping timeline information

**Supported Email Types:**
* ✅ Payment success email (detailed order confirmation)
* Payment failure email

> **Note:** Production emails require a **custom domain** (e.g., `orders@prakriti-pure.com`) when using Resend.

---

## 📊 Google Sheets Integration

* Orders automatically appended to Google Sheet after successful payment
* Each row includes:
  * Order ID (MongoDB ObjectId)
  * Customer details (name, email, phone)
  * Product breakdown (names, quantities)
  * Total quantity and amount
  * Payment status
  * Payment ID (Razorpay)
  * Order date (IST timezone)
  * Fulfillment status (manual dropdown)
  * Full shipping address

> ⚠️ **Important:** Google Sheets is **read-only for admin tracking** — it does NOT sync back to the database. The database is the single source of truth.

### Setup Google Sheets

1. Create a Google Cloud Project
2. Enable Google Sheets API
3. Create a Service Account
4. Download service account JSON key
5. Share your Google Sheet with the service account email
6. Add the JSON as `GOOGLE_SERVICE_ACCOUNT` environment variable (or base64 encoded)

---

## 🛡️ Security Practices

### Current Implementation

* ✅ Payment verification done on backend only
* ✅ Secrets stored in environment variables
* ✅ No sensitive files committed (`.gitignore` configured)
* ✅ Database is single source of truth
* ✅ Admin tools never mutate database

### Planned Security Improvements

See [Roadmap - Critical Security Issues](#-critical-security-issues-high-priority) section below.

---

## 🚀 Deployment

### Frontend (Vercel)

1. Push repository to GitHub
2. Import project into Vercel
3. Add frontend environment variables:
   - `VITE_API_BASE_URL`
   - `VITE_RAZORPAY_KEY_ID`
4. Deploy

### Backend (Render)

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Set build command: `npm install`
4. Set start command: `node server.js`
5. Add all backend environment variables
6. Deploy

> ⚠️ **Note:** Render free tier sleeps after 15 minutes of inactivity. Consider upgrading for production use.

### Database (MongoDB Atlas)

1. Create MongoDB Atlas cluster
2. Whitelist Render/Vercel IPs (or use `0.0.0.0/0` for development)
3. Create database user
4. Copy connection string to `MONGO_URI`

---

## 🗺️ Roadmap & Future Improvements

This roadmap is based on the comprehensive [IMPROVEMENT_REPORT.md](./IMPROVEMENT_REPORT.md) analysis.

### 🔴 Critical Security Issues (High Priority)

#### 1. Input Validation & Sanitization
- [ ] Add server-side validation (express-validator or Joi)
- [ ] Validate email format, phone numbers, ZIP codes
- [ ] Protect against XSS/NoSQL injection attacks
- [ ] Add request sanitization middleware

#### 2. CORS Configuration
- [ ] Configure CORS to allow only specific origins in production
- [ ] Use environment variable for allowed origins
- [ ] Enable credentials only when necessary

#### 3. Environment Variable Validation
- [ ] Validate required env vars on server startup
- [ ] Fail fast if critical variables are missing
- [ ] Provide clear error messages for missing variables

#### 4. Payment Security Enhancements
- [ ] Add payment amount verification before marking order as paid
- [ ] Handle race conditions in payment verification
- [ ] Prevent duplicate payment processing
- [ ] Add transaction locking mechanism

---

### 🟡 Moderate Priority Improvements

#### Code Quality & Architecture

- [ ] **Cart Persistence**
  - Add localStorage to persist cart across page refreshes
  - Improve user experience during navigation

- [ ] **Backend TypeScript Migration**
  - Gradually migrate backend to TypeScript
  - Or add JSDoc type annotations for better IDE support

- [ ] **API Response Standardization**
  - Standardize all API responses to `{ success: boolean, data?: any, message?: string }`
  - Create helper functions for consistent responses

- [ ] **Request Rate Limiting**
  - Add express-rate-limit middleware
  - Protect against DDoS and brute force attacks

#### Data Validation

- [ ] **Frontend Form Validation**
  - Integrate react-hook-form (already installed)
  - Add email format, phone number, ZIP code validation
  - Show field-specific error messages

- [ ] **Backend Order Validation**
  - Enhance Mongoose schema validation
  - Add pre-save hooks for data sanitization
  - Validate pricing calculations match frontend

#### Error Handling & Monitoring

- [ ] **Structured Error Handling**
  - Create error middleware
  - Standardize error responses
  - Hide internal error details in production

- [ ] **Request Logging**
  - Add Morgan for HTTP request logging
  - Implement structured logging (Winston/Pino)
  - Add request ID tracking

- [ ] **Health Check Endpoint**
  - Add `/health` endpoint for monitoring
  - Include database connectivity check
  - Return server uptime and status

---

### 🟢 Nice-to-Have Improvements

#### Code Organization

- [ ] Remove remaining commented code from files
- [ ] Add JSDoc comments for better IDE support
- [ ] Extract duplicate shipping logic to utility function
- [ ] Create constants file for magic numbers/strings

#### Frontend Enhancements

- [ ] **Loading States**
  - Add loading spinners for API calls
  - Implement skeleton loaders for better UX

- [ ] **Error Boundaries**
  - Add React Error Boundaries to prevent app crashes
  - Graceful error handling and user-friendly error pages

- [ ] **Accessibility**
  - Add ARIA labels to interactive elements
  - Improve keyboard navigation
  - Ensure screen reader compatibility

- [ ] **SEO**
  - Add meta tags (Open Graph, Twitter Cards)
  - Implement dynamic meta tags per page
  - Add structured data (JSON-LD)

#### Testing

- [ ] Add Jest for backend unit tests
- [ ] Add React Testing Library for frontend
- [ ] Set up Postman/Newman for API tests
- [ ] Consider Playwright for end-to-end tests

#### Performance

- [ ] **Image Optimization**
  - Convert images to WebP format
  - Implement lazy loading for product images
  - Add image CDN integration

- [ ] **API Response Caching**
  - Add Redis caching for product data
  - Implement cache invalidation strategy

- [ ] **Code Splitting**
  - Use React.lazy for route-based code splitting
  - Reduce initial bundle size

---

### 🎯 Feature Additions

#### User Experience

- [ ] User authentication (AuthPage exists but not implemented)
- [ ] Order tracking page with status updates
- [ ] Product reviews and ratings (UI exists but not functional)
- [ ] Wishlist functionality
- [ ] Order history for authenticated users

#### Admin Features

- [ ] Admin dashboard (React-based)
- [ ] Order fulfillment syncing from Google Sheets to database
- [ ] Product management interface
- [ ] Analytics and reporting

#### Additional Integrations

- [ ] Email subscription system
- [ ] Product search and advanced filtering
- [ ] Inventory management
- [ ] Shipping provider integration (tracking numbers)

---

### 📊 Infrastructure & DevOps

- [ ] Set up CI/CD pipeline (GitHub Actions)
- [ ] Add staging environment
- [ ] Implement automated database backups
- [ ] Set up monitoring (Sentry, LogRocket, or similar)
- [ ] Add performance monitoring (New Relic, DataDog)

### 📝 Code Standards

- [ ] Add ESLint configuration
- [ ] Add Prettier for code formatting
- [ ] Set up pre-commit hooks (Husky)
- [ ] Establish code review process
- [ ] Document API endpoints (Swagger/OpenAPI)

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a new branch** for your feature/fix
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes** and test thoroughly
4. **Commit your changes** with clear messages
   ```bash
   git commit -m "Add: description of your changes"
   ```
5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```
6. **Submit a pull request**

### Contribution Guidelines

* ✅ Ensure no secrets are committed (check `.env` files)
* ✅ Update `.env.example` if adding new environment variables
* ✅ Follow existing code style and patterns
* ✅ Add comments for complex logic
* ✅ Test your changes before submitting PR

---

## 📚 Documentation

* [IMPROVEMENT_REPORT.md](./IMPROVEMENT_REPORT.md) - Detailed analysis of codebase improvements and technical debt
* [Razorpay Documentation](https://razorpay.com/docs/)
* [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com/)
* [Google Sheets API Documentation](https://developers.google.com/sheets/api)

---

## 🧡 Acknowledgements

Built with patience, debugging, caffeine, and a lot of learning.

This project reflects **real‑world full‑stack engineering practices**, not just tutorials.

**Special Thanks:**
* Razorpay for payment infrastructure
* Google Sheets API for simple admin tracking
* The open-source community for amazing tools

---

## 📄 License

MIT License

---

## 📞 Support

For issues, questions, or suggestions:
- Open an issue on GitHub
- Check the [IMPROVEMENT_REPORT.md](./IMPROVEMENT_REPORT.md) for known issues and improvements

---

**Prakriti Pure** — Clean code. Clean UX. Clean products 🌿

*Last updated: January 2025*
