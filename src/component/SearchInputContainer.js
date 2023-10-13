import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

import "../style/SearchInputContainer.css"; // Import your custom CSS for SearchInputContainer

function SearchInputContainer({ handleAddToCart }) {
  const [searchInput, setSearchInput] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/api/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  const handleSearchInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);

    const filteredProducts = products.filter((product) =>
      product.product_name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredProducts(filteredProducts);
  };

  const handleAddToCartAndNavigate = (product) => {
    handleAddToCart(product); // Add the product to the cart

    // Use window.history to navigate to the cart page
    window.history.pushState(null, null, "/cart");
  };

  return (
    <div className="search-bar container">
      <input
        type="text"
        className="form-control search-input"
        placeholder="Search Something..."
        value={searchInput}
        onChange={handleSearchInputChange}
      />
      <div className="search-results row">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col-md-4">
            <div className="card product-card">
              <a href={product.product_link}>
                <img
                  src={product.img}
                  alt={product.product_name}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{product.product_name}</h5>
                  <p className="card-text">{product.product_brand}</p>
                  <p className="card-text">${product.product_price}</p>
                </div>
              </a>
              <Link to="/cart">
                {" "}
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    handleAddToCartAndNavigate(product);
                  }}
                >
                  Add to cart
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchInputContainer;
