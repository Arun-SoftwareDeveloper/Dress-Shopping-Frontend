// // src/components/AddToCart.js
// import React, { useState } from "react";
// import axios from "axios";

// function AddToCart() {
//   const [productId, setProductId] = useState();
//   const [quantity, setQuantity] = useState();
//   const [response, setResponse] = useState(null);

//   const AddToCart = () => {
//     axios
//       .post("http://localhost:4000/api/cart/add-to-cart", {
//         productId: productId,
//         quantity: quantity,
//       })
//       .then(() => {
//         console.log("Product added to cart");
//         setResponse("Product added to cart successfully");
//       })
//       .catch((error) => {
//         console.error("Error adding product to cart:", error);
//         setResponse("Error adding product to cart");
//       });
//   };

//   return (
//     <div>
//       <h2>Add to Cart</h2>
//       <input
//         type="text"
//         placeholder="Product ID"
//         value={productId}
//         onChange={(e) => setProductId(e.target.value)}
//       />
//       <button onClick={AddToCart}>Add to Cart</button>
//       {response && <p>{response}</p>}
//     </div>
//   );
// }

// export default AddToCart;
