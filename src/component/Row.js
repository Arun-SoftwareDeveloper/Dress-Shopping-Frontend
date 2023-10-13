// Row.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "../component/Container";
import "../style/Row.css";
import { Link } from "react-router-dom";

const Row = (props) => {
  const { handleAddToCart } = props;

  // Initialize products as an empty array
  const [products, setProducts] = useState([]);

  // Fetch product data from the backend when the component mounts
  useEffect(() => {
    axios
      .get("https://trendyshoppie-backend.onrender.com/api/products") // Replace with your backend API URL
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  // Function to handle adding to cart and navigate to the cart using browser history
  const handleAddToCartAndNavigate = (product) => {
    handleAddToCart(product); // Add the product to the cart

    // Use window.history to navigate to the cart page
    window.history.pushState(null, null, "/cart");
  };

  return (
    <>
      <div className="container">
        <Container />
        <div className="row">
          {products.map((product) => (
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
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Row;
