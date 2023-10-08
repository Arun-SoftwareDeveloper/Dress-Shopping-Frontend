import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/Header.css";
import SearchInputContainer from "./SearchInputContainer";

const Header = ({
  cartCount,
  products,
  setFilteredProducts,
  filteredProducts,
}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <i className="fa-solid fa-store"></i> Trendy Zone
        </Link>
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
        <SearchInputContainer
          products={products}
          setFilteredProducts={setFilteredProducts}
          filteredProducts={filteredProducts}
        />
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
