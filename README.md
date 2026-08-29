# 🛒 Amazon Clone — Full Stack E-Commerce Website

A full-stack e-commerce web application inspired by Amazon, built with **React.js** on the frontend and a **Python backend**. The project includes product browsing, search, cart management, wishlist functionality, authentication, order placement, product management, and responsive design.

## 🚀 Live Demo

**Frontend:**
https://amazon-clone-nine-mocha.vercel.app/

**Backend API:**
https://amazon-backend-dnry.onrender.com/

> The frontend can be accessed directly by users without needing to clone or run the project locally.

---

## ✨ Features

### 🛍️ Shopping

* Browse products
* Product categories
* Product search
* Product sorting
* Product details page
* Add products to cart
* Increase/decrease product quantity
* Automatic cart count
* Automatic total price calculation
* Remove/empty cart
* Checkout popup
* Order placement
* Recently viewed products

### ❤️ Wishlist

* Add/remove products from wishlist
* Wishlist page
* Wishlist status displayed on products

### 👤 Authentication

* User signup
* User login
* Logout functionality
* Protected routes
* Admin-protected routes

### 📦 Orders

* Place orders from cart
* Order information stored through backend
* Orders page for authenticated users

### 🔐 Admin Features

* Admin route protection
* Add products
* Delete products
* Product management
* Automatic product list refresh after changes

### 🎨 UI / UX

* Amazon-inspired navigation bar
* Responsive design
* Mobile-friendly layout
* Dark mode
* Loading animation
* Toast notifications
* Responsive cart sidebar
* Checkout modal
* Responsive footer

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router
* Axios
* JavaScript
* HTML5
* CSS3
* Font Awesome

### Backend

* Python
* REST API
* FastAPI
* Database integration

### Deployment

* Vercel / Netlify — Frontend
* Render — Backend
* GitHub — Source Code

---

## 📂 Project Structure

```text
amazon-clone/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── AddProduct.js
│   │   ├── AdminPanel.js
│   │   ├── AdminRoute.js
│   │   ├── CartPage.js
│   │   ├── CategoryFilter.js
│   │   ├── Footer.js
│   │   ├── Home.js
│   │   ├── Login.js
│   │   ├── Navbar.js
│   │   ├── Orders.js
│   │   ├── Product.js
│   │   ├── ProductDetails.js
│   │   ├── ProtectedRoute.js
│   │   ├── Signup.js
│   │   └── WishlistPage.js
│   │
│   ├── App.js
│   ├── index.js
│   └── amazonstyle.css
│
├── backend/
│   └── main.py
│
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/raunak-sahu/amazon-clone.git
```

### 2. Navigate to the project

```bash
cd amazon-clone
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the React application

```bash
npm start
```

The application will run at:

```text
http://localhost:3000
```

---

## 🔧 Backend

The frontend communicates with the deployed backend API.

Backend:

```text
https://amazon-backend-dnry.onrender.com
```

Example API endpoints used by the application:

```text
GET  /products
POST /add-to-cart
POST /place-order
DELETE /delete-product/{productId}
```

---

## 🛒 Cart Functionality

The cart supports multiple quantities of the same product.

For example:

```text
Product Price: ₹500
Quantity: 2

Total: ₹1000
```

Cart data is also stored in browser `localStorage`, allowing cart items to persist when the page is refreshed.

---

## 🌙 Dark Mode

The application includes a dark mode toggle.

The selected theme is stored in `localStorage` so the user's preference persists after refreshing the page.

---

## 📱 Responsive Design

The website is designed to work across:

* 💻 Desktop
* 📱 Mobile
* 📲 Tablet

The navigation bar, product cards, cart, checkout section, and footer adapt to smaller screen sizes.

---

## 🔐 Security

Sensitive environment files are excluded from Git using `.gitignore`.

```text
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
```

Python cache files are also ignored:

```text
__pycache__/
```

---

## 📸 Main Pages

### 🏠 Home

Product listing with:

* Search
* Categories
* Sorting
* Wishlist
* Add to Cart
* Product Details

### 🛒 Cart

Includes:

* Product quantity controls
* Total items
* Total price
* Empty Cart
* Checkout

### ❤️ Wishlist

Displays products saved by the user.

### 📦 Orders

Displays placed orders for authenticated users.

### 👨‍💼 Admin

Admin users can:

* Add products
* Delete products
* Manage products

---

## 🧠 What I Learned

Building this project helped me practice:

* React component architecture
* React Hooks
* State management
* React Router
* Protected routes
* REST API integration
* Axios
* Authentication
* CRUD operations
* LocalStorage
* Responsive CSS
* Backend integration
* Git & GitHub
* Deployment
* Debugging production issues

---

## 🔮 Future Improvements

Some features planned for future versions:

* Online payment integration
* User profile page
* Product reviews and ratings
* Product filtering by price
* Order tracking
* Persistent wishlist using backend
* Better authentication and authorization
* Image upload for products
* Improved mobile navigation
* Database optimization

---

## 👨‍💻 Author

**Raunak Sahu**

Full Stack Developer | Machine Learning Enthusiast

Interested in:

* Full Stack Development
* Backend Development
* System Design
* Machine Learning
* Data Structures & Algorithms

---

## ⭐ Support

If you found this project useful or interesting, consider giving the repository a ⭐ on GitHub!

---

## 📄 License

This project is created for **educational and portfolio purposes**.

It is an independent project inspired by the design and functionality of Amazon and is not affiliated with or endorsed by Amazon.
