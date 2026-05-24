import { useParams } from "react-router-dom";

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

      <button
        onClick={() => handleAddToCart(product)}
      >
        Add to Cart
      </button>

    </div>

  );

}

export default ProductDetails;
