import Product from "./Product";
import CategoryFilter from "./CategoryFilter";
function Home({products,handleAddToCart,wishlist,toggleWishlist,setSelectedProduct,searchTerm,setSearchTerm,sortOption,setSortOption, selectedCategory,
  setSelectedCategory,handleViewProduct,recentlyViewed,currentPage,setCurrentPage,handleDeleteProduct}) {
 const filteredProducts = products.filter((item) => {

  console.log(selectedCategory);
    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =

      selectedCategory === "All"

      ||

      item.category === selectedCategory;

    return (matchesSearch && matchesCategory);

  });
<CategoryFilter
selectedCategory={selectedCategory}
setSelectedCategory={setSelectedCategory}
/>


 const sortedProducts=[...filteredProducts];   // creates copy of array
 sortedProducts.sort((a,b)=>{
  const priceA=Number(a.price.replace("₹", ""));   //converting string to number
  const priceB=Number(b.price.replace("₹", ""));
  if(sortOption==="low")
  {
    return priceA-priceB;
  }
  if(sortOption==="high")
  {
    return priceB-priceA;
  }
  return 0;
 })
 const productsPerPage = 4;

const lastProductIndex =
  currentPage * productsPerPage;

const firstProductIndex =
  lastProductIndex - productsPerPage;

const currentProducts =
  sortedProducts.slice(
    firstProductIndex,
    lastProductIndex
  );
  return (

    <div>

      

  <div className="hero-section">

    <img
      src={require("../images/imag1am.jpg")}
      alt="banner"
      className="hero-image"
    />

  </div>
<CategoryFilter
  selectedCategory={selectedCategory}
  setSelectedCategory={setSelectedCategory}
/>

<div className="home-search">

  <input
    type="text"
    placeholder="Search products..."

    value={searchTerm}

    onChange={(event) =>
      setSearchTerm(event.target.value)
    }

    className="home-search-input"
  />

</div>
  
  <div className="sort-container">
    <select
    value={sortOption}
    onChange={(e)=>
      setSortOption(e.target.value)
    }
    >
      <option value="default">
        Default
      </option>
      <option value="low">
        Price: Low to High
      </option>

      <option value="high">
        Price: High to Low
      </option>

    </select>

  </div>

  <div className="shop-section">

  {filteredProducts.length === 0 ? (

    <h2>No products found</h2>

  ) : (

    currentProducts.map((item, index) => (

      <Product
        key={index}
        id={item.id}
        title={item.title}
        image={item.image}
        price={item.price}
        rating={item.rating}
        onAddToCart={() => handleAddToCart(item)}
        wishlist={wishlist}
        toggleWishlist={toggleWishlist}

  onDelete={() =>
    handleDeleteProduct(item.id)
  }
  onViewDetails={() =>
  handleViewProduct(item)
}


      />

    ))

   )}

</div>

<div className="pagination">

  {[...Array(
    Math.ceil(
      sortedProducts.length /
      productsPerPage
    )
  )].map((_, index) => (

    <button
      key={index}

      onClick={() =>
        setCurrentPage(index + 1)
      }

      className={
        currentPage === index + 1
          ? "active-page"
          : ""
      }
    >

      {index + 1}

    </button>

  ))}

</div>
{recentlyViewed.length > 0 && (

  <div className="recent-section">

    <h2>Recently Viewed</h2>

    <div className="recent-grid">

      {recentlyViewed.map((item, index) => (

        <div
          key={index}
          className="recent-card"
        >

          <img
            src={item.image}
            alt={item.title}
          />

          <p>{item.title}</p>

        </div>

      ))}

    </div>

  </div>

)}

</div>

  );

}

export default Home;
