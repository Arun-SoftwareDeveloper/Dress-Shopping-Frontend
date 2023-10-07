// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Row from "./component/Row";
import Cart from "./component/Cart";
import Header from "./component/Header";
import Footer from "./component/Footer";
// import Container from "./component/Container";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [cartItems, setCartItems] = useState([]); // Initialize cart items as an empty array
  const [cartCount, setCartCount] = useState(0);

  // Function to add a product to the cart
  const handleAddToCart = (product) => {
    // Check if the product is already in the cart
    const existingProduct = cartItems.find((item) => item.id === product.id);

    if (existingProduct) {
      // If the product is already in the cart, increase its quantity
      const updatedCart = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );

      setCartItems(updatedCart);
    } else {
      // If the product is not in the cart, add it with a quantity of 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }

    // Increment cart count
    setCartCount(cartCount + 1);
  };

  // Function to update the quantity of a product in the cart
  const handleUpdateCart = (productId, newQuantity) => {
    // Find the product in the cart
    const updatedCart = cartItems.map((item) =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
  };

  return (
    <>
      <Router>
        <Header cartCount={cartCount} />
        <Routes>
          <Route path="/" element={<Row handleAddToCart={handleAddToCart} />} />
          <Route
            path="/cart"
            element={
              <Cart cartItems={cartItems} handleUpdateCart={handleUpdateCart} />
            }
          />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
