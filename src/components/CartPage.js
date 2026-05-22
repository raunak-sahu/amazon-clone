function CartPage({
  cartItems,
  totalPrice,
  increaseQuantity,
  decreaseQuantity,
  emptyCart,
  setShowCheckout
}) {

  return (

    <div className="cart-page">

      <h1>Your Cart</h1>

      <h2>Total: ₹{totalPrice}</h2>

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
                onClick={() =>
                  decreaseQuantity(index)
                }
              >
                -
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() =>
                  increaseQuantity(index)
                }
              >
                +
              </button>

            </div>

          </div>

        </div>

      ))}

    </div>

  );

}

export default CartPage;