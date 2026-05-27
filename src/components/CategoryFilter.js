function CategoryFilter({
  selectedCategory,
  setSelectedCategory
}) {

  const categories = [
    "All",
    "Gaming",
    "Home",
    "Electronics",
    "Toys",
    "Fashion",
    "Beauty"
  ];

  return (

    <div className="category-filter">

      {categories.map((category) => (

        <button
          key={category}
          onClick={() =>
            setSelectedCategory(category)
          }
  className={
    selectedCategory === category
      ? "category-btn active-category"
      : "category-btn"
  }
        >

          {category}

        </button>

      ))}

    </div>

  );

}

export default CategoryFilter;