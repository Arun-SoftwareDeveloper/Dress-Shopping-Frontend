import React from "react";
import { Link } from "react-router-dom";
import "../style/Header.css";
import SearchInputContainer from "./SearchInputContainer";

const Header = ({
  cartCount,
  products,
  setFilteredProducts,
  filteredProducts,
  handleAddToCart,
}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <i className="fa-solid fa-store"></i> Trendy Zone
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="ml-auto">
          <SearchInputContainer
            products={products}
            setFilteredProducts={setFilteredProducts}
            filteredProducts={filteredProducts}
            handleAddToCart={handleAddToCart}
          />
        </div>
        <div className="cart">
          <Link to="/cart" className="cart-link">
            <i className="fa-solid fa-cart-shopping"></i> Cart {cartCount}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
