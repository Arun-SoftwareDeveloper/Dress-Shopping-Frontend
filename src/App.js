import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Row from "./component/Row";
import Cart from "./component/Cart";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Container from "./component/Container";
// Import Bootstrap CSS in your App.js
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [cartItems, setCartItems] = useState([]); // Initialize cart items as an empty array
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (product) => {
    // Increment cart count
    setCartCount(cartCount + 1);

    // Add the product to cartItems
    setCartItems([...cartItems, product]);
  };

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Row handleAddToCart={handleAddToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
