import { useState } from "react";

function AddProduct({fetchProducts}) {

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  async function handleSubmit(event) {

    event.preventDefault();

    const newProduct = {

      id: Date.now(),

      title,

      price,

      category,

      image

    };

    const response = await fetch(
      "https://amazon-backend-dnry.onrender.com/add-product",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify(newProduct)
      }
    );

    const data = await response.json();
await fetchProducts();
    console.log(data);

    alert("Product Added Successfully");

    setTitle("");
    setPrice("");
    setCategory("");
    setImage("");
  }

  return (

    <div className="add-product-container">

      <h2>Add Product</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) =>
            setPrice(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) =>
            setImage(e.target.value)
          }
        />

        <button type="submit">
          Add Product
        </button>

      </form>

    </div>
  );
}

export default AddProduct;