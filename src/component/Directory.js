// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Row from "../component/Row";
// import Cart from "../component/Cart";
// import Header from "../component/Header";
// import Footer from "../component/Footer";
// import Container from "../component/Container";

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [cartItems, setcartItems] = useState([]);

//   const handleaddtocart = (item) => {
//     setcartItems([...cartItems, item]);
//     setCount(count + 1);
//   };

//   return (
//     <>
//       <Header></Header>
//       <Router>
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <Row
//                 setCount={setCount}
//                 count={count}
//                 handleaddtocart={handleaddtocart}
//               />
//             }
//           />
//           <Route path="/cart" element={<Cart cartItems={cartItems} />} />
//         </Routes>
//       </Router>
//     </>
//   );
// };

// export default App;
