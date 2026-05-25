function Product({ id,title, image,
  price,
  rating,   inStock, wishlist,
  toggleWishlist,onViewDetails,onAddToCart }) {

  return (

    <div className="box">

      <div className="box-content">

        <h2>{title}</h2>

        <img
          src={image}
          alt={title}
          style={{
  width: "100%",
  height: "220px",
  objectFit: "cover",
  borderRadius: "12px"
}}
        />
        <h3 className="product-price">{price}</h3>

         <p className="product-rating">{rating}</p>
        <p>See more</p>
         <button
  className="wishlist-btn"
  onClick={() => toggleWishlist(title)}
>

  {wishlist.includes(title) ? "❤️" : "🤍"}

</button>

<button
  onClick={(e) => {
    e.stopPropagation();
    e.preventDefault();
    onAddToCart();
  }}
  className="cart-btn"
>
  Add to Cart
</button>

      </div>

    </div>
    
  );
}

export default Product;

