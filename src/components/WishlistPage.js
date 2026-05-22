function WishlistPage({
  wishlist,
  toggleWishlist
}) {

  return (

    <div className="wishlist-page">

      <h1>Your Wishlist</h1>

      {wishlist.length === 0 ? (           //means:show empty message if no items   otherwise:render wishlist items

        <p>No items in wishlist</p>

      ) : (

        wishlist.map((item, index) => (

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

              <button
                onClick={() =>
                  toggleWishlist(item)
                }
              >
                Remove
              </button>

            </div>

          </div>

        ))

      )}

    </div>

  );

}

export default WishlistPage;