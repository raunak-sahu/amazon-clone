import axios from "axios";
import Signup from "./components/Signup";

import Login from "./components/Login";
import AddProduct from "./components/AppProduct";
import {Routes,Route} from "react-router-dom";
import Home from "./components/Home";
import CartPage from "./components/CartPage";
import WishlistPage from "./components/WishlistPage";
import ProductDetails from "./components/ProductDetails";
import "./amazonstyle.css";
import Navbar from "./components/Navbar";
import { useState,useEffect } from "react";
function App() {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState(() => {

  const savedCart = localStorage.getItem("cartItems");

  return savedCart
    ? JSON.parse(savedCart)
    : [];

});
const[products, setProducts]=useState([]);
const [wishlist, setWishlist] = useState([]);
const [searchTerm, setSearchTerm] = useState("");
const[sortOption,setSortOption]=useState("default");
const [darkMode, setDarkMode] = useState(() => {

  const savedTheme =
    localStorage.getItem("darkMode");

  return savedTheme === "true";

});
const[showCheckout,setShowCheckout]=useState(false); 
const[showCart,setShowCart]=useState(false);
const [selectedCategory, setSelectedCategory] =
  useState("All");
  const[loading,setLoading]=useState(true);
  const[showToast,setShowToast]=useState(false);
const [recentlyViewed, setRecentlyViewed] =
  useState([]);
  const[error,setError]=useState("");
  const[currentPage,setCurrentPage]=useState(1);

  useEffect(() => {

  localStorage.setItem(
    "cartItems",
    JSON.stringify(cartItems)
  );

}, [cartItems]);

useEffect(() => {

  localStorage.setItem(
    "darkMode",
    darkMode
  );

}, [darkMode]);

async function fetchProducts() {

    try {

      const response = await fetch(
        "https://amazon-backend-dnry.onrender.com/products"
      );

      const data = await response.json();

      setProducts(data);

      setLoading(false);

    }

    catch (error) {

      console.log(error);

      setError("Failed to load products");

      setLoading(false);

    }

  }
useEffect(() => {

  

  fetchProducts();

}, []);
if(error){
  return(
    <div className="error-message">
      <h2>{error}</h2>
    </div>
  );
}

if (loading) {

  return (

    <div className="loader-container">

      <div className="loader"></div>

    </div>

  );

}

  if (loading) {

    return (

      <div className="loader-container">

        <div className="loader"></div>

      </div>

    );

  }


function handleAddToCart(product) {
  console.log("Add to cart clicked");
  console.log(product);
 const email = "raunak@gmail.com";
 axios.post(
  "https://amazon-backend-dnry.onrender.com/add-to-cart",
  {
    email,
    product
  }
)
.then((response) => {

  console.log(response.data);

})
.catch((error) => {

  console.log(error);

});
  const existingItem = cartItems.find(      // find(item => ...)--- finds matching product
    item => item.title === product.title
  );

  if (existingItem) {

    const updatedCart = cartItems.map(item => {    //map: updates quantity if product already exists

      if (item.title === product.title) {

       
       
        return {
          ...item,
          quantity: (item.quantity || 1) + 1
        };

      }

      return item;

    });

    setCartItems(updatedCart);

  }

  else {

    setCartItems([
      ...cartItems,
      {
        ...product,
        quantity: 1
      }
    ]);

  }

  setCartCount(prev => prev + 1);
  setShowToast(true);
  setTimeout(()=>{
    setShowToast(false);
  },2000);

}

function increaseQuantity(indexToIncrease) {

  const updatedCart = cartItems.map((item, index) => {

    if (index === indexToIncrease) {

      return {
        ...item,
        quantity: item.quantity + 1
      };

    }

    return item;

  });

  setCartItems(updatedCart);

  setCartCount(prev => prev + 1);

}
function decreaseQuantity(indexToDecrease) {

  const updatedCart = cartItems.map((item, index) => {

    if (
      index === indexToDecrease &&
      item.quantity > 1
    ) {

      return {
        ...item,
        quantity: item.quantity - 1
      };

    }

    return item;

  });

  setCartItems(updatedCart);

  setCartCount(prev => prev - 1);

}
function emptyCart() {

  setCartItems([]);

  setCartCount(0);

}
function toggleWishlist(productTitle) {

  if (wishlist.includes(productTitle)) {

    const updatedWishlist = wishlist.filter(
      item => item !== productTitle
    );

    setWishlist(updatedWishlist);

  }

  else {

    setWishlist([...wishlist, productTitle]);

  }

}
  
  const totalPrice = cartItems.reduce((total, item) => {

  return total + Number(item.price.replace("₹", ""));

}, 0);

/*const filteredProducts = products.filter(item =>

  item.title.toLowerCase().includes(    // check whether title contain type text or not
    searchTerm.toLowerCase()     //makes search case insensitive
  )

);*/
function handleViewProduct(product) {



  const updatedRecent = [

    product,

    ...recentlyViewed.filter(
      item => item.id !== product.id
    )

  ];

  setRecentlyViewed(updatedRecent.slice(0, 4));
}

  return (
   <div className={darkMode ? "dark-mode" : ""}>
      <Navbar cartCount={cartCount} 
      toggleCart={()=>setShowCart(!showCart)}
        searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
      />
      <Routes>

<Route
  path="/add-product"
  element={<AddProduct
  fetchProducts={fetchProducts} />}
/>
<Route
   path="/login"
   element={<Login/>}
   />
<Route
  path="/"
  element={
    
    <Home
      products={products}
      handleAddToCart={handleAddToCart}
      wishlist={wishlist}
      toggleWishlist={toggleWishlist}
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      sortOption={sortOption}
      setSortOption={setSortOption}
       selectedCategory={selectedCategory}
setSelectedCategory={setSelectedCategory}
handleViewProduct={handleViewProduct}
recentlyViewed={recentlyViewed}
currentPage={currentPage}
setCurrentPage={setCurrentPage}
    />
   
  }
/>

  <Route
    path="/cart"
    element={<CartPage 
    cartItems={cartItems}
    totalPrice={totalPrice}
    increaseQuantity={increaseQuantity}
    decreaseQuantity={decreaseQuantity}
    emptyCart={emptyCart}
    setShowCheckout={setShowCheckout}
    />
  }
  />

<Route 
path="/signup"
element={<Signup/>}
/>

  <Route
    path="/wishlist"
    element={<WishlistPage 
     wishlist={wishlist}
      toggleWishlist={toggleWishlist}
      />
    }
  />

  <Route
  path="/product/:id"
  element={
    <ProductDetails
      products={products}
      handleAddToCart={handleAddToCart}
    />
  }
/>

</Routes>
      <button
        className="dark-mode-btn"
        onClick={()=> setDarkMode(!darkMode)}>
           {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}

      </button>
      
    <div className={showCart ? "cart-sidebar active" : "cart-sidebar"}>
  <button 
  className="close-cart-btn"
  onClick={()=>setShowCart(false)}>✖</button>
  <h2>Your Cart</h2>

  <h3>Total: ₹{totalPrice}</h3>

  <button
    className="empty-cart-btn"
    onClick={emptyCart}
  >
    Empty Cart
  </button>

  <button
    className="checkout-btn"
    onClick={() => setShowCheckout(true)}
  >
    Checkout
  </button>

  {cartItems.map((item, index) => (

    <div
      key={index}
      className="cart-item"
    >

      <img
        src={item.image}
        alt={item.title}
        className="cart-image"
      />

      <div>

        <p>{item.title}</p>

        <p>{item.price}</p>

        <div className="quantity-controls">

          <button
            onClick={() => decreaseQuantity(index)}
          >
            -
          </button>

          <span>{item.quantity}</span>

          <button
            onClick={() => increaseQuantity(index)}
          >
            +
          </button>

        </div>

      </div>

    </div>

  ))}

</div>
{showCheckout && (

  <div className="checkout-popup">

    <div className="checkout-content">

      <h2>Order Summary</h2>

      <p>Total Items: {cartCount}</p>

      <p>Total Price: ₹{totalPrice}</p>

      <button
        onClick={() => setShowCheckout(false)}
      >
        Close
      </button>

    </div>

  </div>


)}
{
  showToast && (

  <div className="toast-message">

    ✅ Added to cart

  </div>

)}
    
    </div>
  )}


    


export default App;