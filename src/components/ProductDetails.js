/*import { useParams } from "react-router-dom";

function ProductDetails({
  products,
  handleAddToCart
}) {

  const { id } = useParams();

  const product = products.find(

    (item) => item.id === Number(id)

  );

  return (

    <div className="product-details-page">

      <img
        src={product.image}
        alt={product.title}
        className="details-image"
      />

      <h1>{product.title}</h1>

      <h2>{product.price}</h2>

      <p>{product.rating}</p>


     <p>In Stock</p>

     {product.inStock === false
  ? "Out of Stock"
  : "In Stock"}


      <button
        onClick={() => handleAddToCart(product)}
      >
        Add to Cart
      </button>

    </div>

  );

}

export default ProductDetails;
*/

import { useParams } from "react-router-dom";

function ProductDetails({ products, handleAddToCart }) {
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  // 1. ADD THIS GUARD CLAUSE HERE:
  if (!product) {
    return <div className="product-details-page">Loading product details...</div>;
  }

  return (
    <div className="product-details-page">
      <img
        src={product.image}
        alt={product.title}
        className="details-image"
      />

      <h1>{product.title}</h1>
      <h2>${product.price}</h2>
      <p>Rating: {product.rating}</p>

      {/* 2. FIXED TERNARY LOGIC HERE */}
      <p>{product.inStock === false ? "Out of Stock" : "In Stock"}</p>

      <button onClick={() => handleAddToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetails;