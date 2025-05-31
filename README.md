# 🛒 TechCart – E-commerce Web App

TechCart is a modern e-commerce frontend built using **React**, **TypeScript**, **React Router**, **React Query**, and custom features like cart management, product filters, and user authentication via localStorage.
All products are fictional, provided by the Fake Store API, and displayed for testing, styling, or learning purposes only. They do not represent real items, prices, or availability.

---

# 🚀 Features

- 🔐 User Registration & Login (with validation)
- 🛍️ Browse products by category
- 🛒 Add to Cart, Increase/Decrease quantity, Clear Cart
- 📦 Filter products by price and sort order
- 🔎 Search products across all categories
- 🎓 Student Discount Page
- 📜 Pages: About Us, Terms, Shipping
- 🔝 Scroll-to-top button
- 📂 React Context API for cart and filter state
- 💬 Toasts & Alerts for feedback

---

## 🧑‍💻 Tech Stack

- **React** (with Hooks)
- **TypeScript**
- **React Router DOM**
- **React Query** (for fetching and caching)
- **Zod** for input validation
- **CSS** + Tailwind-style utility classes
- **LocalStorage** (for persistent user and cart data)

---

## 📁 Folder Structure

src/
├── components/ # Reusable UI components (e.g., ScrollToTop)
├── features/ # Contexts for cart and filter
├── pages/ # App pages (HomePage, Login, Register, etc.)
├── services/ # API services (e.g., ProductService)
├── App.tsx # App entry
├── main.tsx # Renders app with router
├── navbar.tsx # Navigation bar component
├── App.css # Global styles
├── Products.css # Styles specific to product listing

## 🛠️ Installation & Run Locally

1. **Clone the repo:**
   ```bash
   git clone https://github.com/Farideh-Taheri/techcart.git
   cd techcart/client

   ```

## future improvements:

- 🧾 **Add payment integration** (e.g., Stripe or PayPal)
- 🌐 **Deploy the app** using platforms like Vercel or Netlify
- 🧑‍🔧 **Implement user authentication** with JWT or Firebase
- 💾 **Connect to a real backend** (replace Fake Store API)
- 💬 **Add product reviews and ratings**
- 🧪 **Write unit and integration tests** (e.g., with React Testing Library)
- 📊 **Add analytics** to track user behavior
- 🛠️ **Admin dashboard** for managing products and orders
