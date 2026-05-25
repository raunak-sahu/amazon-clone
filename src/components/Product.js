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
<<<<<<< HEAD
      <button
=======
       {/*<button
>>>>>>> 4bd0a87 (final fix)
  onClick={(e) => {
    if (!inStock) return; 
    e.stopPropagation();
    e.preventDefault();
    onAddToCart();
  }}
<<<<<<< HEAD

=======
>>>>>>> 4bd0a87 (final fix)
  className="cart-btn"
  disabled={!inStock} 
>
<<<<<<< HEAD

  Add to Cart

=======
  
  {inStock ? "Add to Cart" : "Out of Stock"}
</button>
*/}
<button className="cart-btn">
  TEST BUTTON
>>>>>>> 4bd0a87 (final fix)
</button>
      </div>

    </div>
    
  );
}

export default Product;

