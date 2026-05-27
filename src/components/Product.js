function Product({
  title,
  image,
  price,
  rating,
  wishlist,
  toggleWishlist,
  onAddToCart,
  onDelete,
  onViewDetails
}) {

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

        <div className="product-buttons">

  <button
    className="wishlist-btn"
    onClick={() => toggleWishlist(title)}
  >
    {wishlist.includes(title) ? "❤️ Wishlist" : "🤍 Wishlist"}
  </button>

  <button
    onClick={(e) => {
      e.stopPropagation();
      e.preventDefault();
      onAddToCart();
    }}
    className="add-btn"
  >
    Add to Cart
  </button>

<button
  className="details-btn"
  onClick={onViewDetails}
>
  View Details
</button>

  <button
    className="delete-btn"
    onClick={onDelete}
  >
    Delete Product
  </button>

</div>


      </div>

    </div>

  );

}

export default Product;