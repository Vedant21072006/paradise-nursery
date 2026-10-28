# 🌿 Paradise Nursery

**Paradise Nursery** is a responsive plant shopping web application built using React, Vite, and Redux Toolkit. It allows users to explore indoor plants, browse categories, add plants to their shopping cart, update quantities, and view their order summary.

## 🌱 Project Overview

The goal of Paradise Nursery is to provide a simple and user-friendly online platform for discovering and purchasing indoor plants.

## ✨ Features

- **Landing Page:** Attractive home page with a background image and a Get Started button.
- **About Us:** Information about Paradise Nursery and its mission.
- **Plant Catalog:** Browse plants with names, prices, categories, and descriptions.
- **Category Filters:** Filter plants by category.
- **Search and Sorting:** Search for plants and sort them by price.
- **Shopping Cart:** Add plants, remove items, and update quantities.
- **Order Summary:** Calculate subtotal, delivery charges, and total price.
- **Responsive Design:** User-friendly interface for desktop and mobile devices.

## 🛠️ Technologies Used

- React.js
- Vite
- JavaScript
- Redux Toolkit
- React Redux
- CSS
- Lucide React Icons

## 📁 Project Structure

```text
paradise-nursery/
├── public/
├── src/
│   ├── components/
│   │   ├── AboutUs.jsx
│   │   ├── ProductList.jsx
│   │   ├── CartItem.jsx
│   │   └── Shop.css
│   ├── data/
│   │   └── plants.js
│   ├── redux/
│   │   ├── CartSlice.jsx
│   │   └── store.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## 🚀 Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/vedant21072006/paradise-nursery.git
   ```

2. Navigate to the project directory:

   ```bash
   cd paradise-nursery
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal.

## 🛒 Shopping Cart Functionality

The application uses Redux Toolkit to manage shopping cart state through three main reducer functions:

- `addItem()` — adds a plant to the cart or increases its quantity.
- `removeItem()` — removes a plant from the cart.
- `updateQuantity()` — updates the quantity of a selected plant.

## 🎯 Project Objective

To develop a responsive and interactive online plant shopping application that demonstrates React component development, state management using Redux Toolkit, product filtering, and shopping cart operations.

## 👩‍💻 Repository

GitHub: https://github.com/vedant21072006/paradise-nursery

---

*Paradise Nursery — Bring nature home, one plant at a time.* 🌿
