import { Link } from "react-router-dom";
function handleLogout() {

  localStorage.removeItem("token");

  window.location.href = "/login";

}
function Navbar({ cartCount,toggleCart,searchTerm,setSearchTerm })
{
     return (
    <div className="navbar">
      <div className="navlogo border">
        <div className="logo"></div>
      </div>

      <div className="nav-address border">
        <p className="add-first">Deliver to</p>
        <div className="add-icon">
          <i className="fa-solid fa-location-dot"></i>
          <p className="add-sec">India</p>
        </div>
      </div>

      <div className="nav-search">
        <select className="search-select">
          <option>All</option>
        </select>
        <input placeholder="Search Amazon" className="search-input"
        value={searchTerm}
        onChange={(e)=>
          setSearchTerm(e.target.value)
        } />
        <div className="search-icon">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>

      <div className="nav-sign-in border">
        <p><span>Hello, sign in</span></p>
        <p className="nav-second">Account & Lists</p>
      </div>

      

  <i className="fa-solid fa-cart-shopping"></i>
<div className="mobile-nav-links">

  <button
    className="logout-btn"
    onClick={handleLogout}
  >
    Logout
  </button>

  <Link
    to="/"
    className="nav-link"
  >
    Home
  </Link>

  <Link
    to="/wishlist"
    className="nav-link"
  >
    Wishlist
  </Link>

  <div
    className="nav-cart"
    onClick={toggleCart}
  >

    <i className="fa-solid fa-cart-shopping"></i>

    <span className="nav-cart-btn">

      Cart

      {cartCount > 0 && (
        <span className="cart-badge">
          {cartCount}
        </span>
      )}

    </span>

  </div>

</div>
  
    </div>
  );
}
 

export default Navbar;