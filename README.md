# 🌿 Prakriti Pure

Prakriti Pure is a **modern, minimal, wellness‑focused e‑commerce web application** built with **React + TypeScript + Vite**, designed for selling natural and herbal products. The project focuses on **clean UI, strong mobile UX, and production‑ready architecture**, while keeping the codebase simple and maintainable.

This repository represents both a **learning‑driven full‑stack frontend project** and a **foundation for a real small‑scale business website**.

---

## ✨ Key Highlights

* 🌱 Clean, wellness‑inspired UI (green & neutral tones)
* 📱 Mobile‑first responsive design
* 🛒 Cart system with global state
* 🔍 Product listing with filters (price, category, rating)
* ⚡ Fast performance using Vite
* 🧠 Strict TypeScript setup for long‑term maintainability
* 🚀 Deployed on Vercel

Live Demo: [https://prakriti-pure.vercel.app](https://prakriti-pure.vercel.app)

---

## 🛠 Tech Stack

### Frontend

* **React 18** – UI library
* **TypeScript** – Type safety and scalability
* **Vite** – Fast build tool and dev server
* **React Router v6** – Client‑side routing

### Styling & UI

* **Tailwind CSS** – Utility‑first styling
* **shadcn/ui** – Accessible, composable UI components
* **Radix UI** – Underlying primitives (Sheet, Checkbox, etc.)
* **Lucide Icons** – Clean, modern icon set

### State Management

* **React Context API** – Cart and global state

### Deployment

* **Vercel** – Hosting and CI/CD

---

## 📁 Project Structure

```
Prakriti_pure/
├─ public/
│  └─ images/              # Product & brand images (served statically)
├─ src/
│  ├─ assets/              # Local dev assets (not used in production paths)
│  ├─ components/
│  │  ├─ ui/               # shadcn/ui components
│  │  ├─ Navigation.tsx
│  │  ├─ Footer.tsx
│  │  ├─ ProductCard.tsx
│  │  └─ Rating.tsx
│  ├─ context/
│  │  └─ CartContext.tsx
│  ├─ data/
│  │  └─ products.ts       # Product data source
│  ├─ pages/
│  │  ├─ HomePage.tsx
│  │  ├─ ShopPage.tsx
│  │  ├─ ProductDetailsPage.tsx
│  │  ├─ CartPage.tsx
│  │  ├─ CheckoutPage.tsx
│  │  └─ AboutPage.tsx
│  ├─ styles/
│  ├─ types/
│  ├─ App.tsx
│  ├─ main.tsx
│  └─ index.css
├─ tsconfig.json
├─ vite.config.ts
├─ package.json
└─ README.md
```

---

## 🧩 Core Features

### 🛍 Product Listing

* Displays products using reusable `ProductCard` components
* Ratings, pricing, and short descriptions
* Responsive grid layout

### 🎛 Filters (Mobile & Desktop)

* Price range slider
* Category selection
* Minimum rating filter
* Mobile‑optimized bottom sheet UI

### 🛒 Cart System

* Add/remove products
* Quantity handling
* Cart badge indicator
* Global cart state using Context API

### 📱 Mobile UX Focus

* Slide‑in navigation menu
* Bottom‑sheet filters
* Touch‑friendly spacing and typography
* Accessible components

---

## 🖼 Image Handling (Important)

Images are **served from the `public/` folder**, not `src/`, to ensure they work in production (Vercel).

### Correct usage:

```js
image: "/images/D-Tan.jpeg"
```

### Why?

* `src/` does not exist after build
* `public/` files are served directly
* Ensures consistent URLs in production

---

## ⚙️ TypeScript Philosophy

This project uses **strict TypeScript** intentionally:

* `strict: true`
* No implicit `any`
* Explicit typing for events and callbacks

### Why this matters:

* Prevents hidden bugs
* Improves refactoring safety
* Makes the codebase scalable

TypeScript errors are treated as **design feedback**, not annoyances.

---

## 🚀 Getting Started Locally

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/Prakriti-pure.git
cd Prakriti-pure
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the development server

```bash
npm run dev
```

App will be available at:

```
http://localhost:5173
```

---

## 🌍 Deployment

The project is deployed using **Vercel**.

### Deployment steps:

1. Push code to GitHub
2. Import repository into Vercel
3. Vercel auto‑detects Vite + React
4. Build & deploy

No extra configuration required.

---

## 🔮 Future Roadmap

Planned improvements:

* 💳 Payment gateway integration (Razorpay)
* 📧 Order confirmation emails
* 🔐 Authentication & user accounts
* 📦 Backend API for products & orders
* 🧾 Admin dashboard
* 🌐 SEO & performance optimizations
* ☁️ Cloudinary for advanced image handling

---

## 🎯 Project Goals

This project was built to:

* Practice **real‑world frontend architecture**
* Learn **TypeScript deeply (not superficially)**
* Build a **deployable business‑ready UI**
* Focus on **UX quality, not just features**

---

## 🤝 Contributing

This is currently a personal project, but suggestions and improvements are welcome.

Steps:

1. Fork the repository
2. Create a feature branch
3. Make changes
4. Open a pull request

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 🙏 Acknowledgements

* shadcn/ui
* Radix UI
* Lucide Icons
* Vite
* React Community

---

### 🌿 Prakriti Pure

*Pure • Natural • Conscious*
