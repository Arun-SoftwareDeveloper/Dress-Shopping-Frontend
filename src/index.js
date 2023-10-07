import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import Cart from "./component/Cart"
import Directory from "./component/Directory";
import AddToCart from "./component/AddToCart";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App></App>
    {/* <AddToCart /> */}
  </React.StrictMode>
);
