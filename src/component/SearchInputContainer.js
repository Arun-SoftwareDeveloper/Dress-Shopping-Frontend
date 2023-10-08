import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Link } from "react-router-dom";

function SearchInputContainer() {
  const [searchInput, setSearchInput] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]); // Define filteredProducts state

  useEffect(() => {
    // Fetch products from your API or database here
    axios.get("http://localhost:4000/api/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  const handleSearchInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);
    console.log(searchInput);

    const filteredProducts = products.filter((product) =>
      product.product_name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredProducts(filteredProducts);
  };

  return (
    <div className="search-bar container">
      <input
        type="text"
        className="form-control" // Add Bootstrap class for input
        placeholder="Search Something..."
        value={searchInput}
        onChange={handleSearchInputChange}
      />
      <div className="search-results">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col-md-4">
            <div className="card">
              <img
                src={product.img}
                alt={product.product_name}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{product.product_name}</h5>
                <p className="card-text">{product.product_brand}</p>
                <p className="card-text">${product.product_price}</p>
                <Link to="/cart">
                  <button className="btn btn-primary">Add to cart</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
        r
      </div>
    </div>
  );
}

export default SearchInputContainer;
