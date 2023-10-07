import React from "react";
import "../style/Cart.css";

function Cart({ cartItems }) {
  // const [itemCount, setitemCount] = useState(0);
  const totalPrice = cartItems.reduce(
    (accumulator, item) => accumulator + item.product_price,
    0
  );

  // const increaseItem = (e) => {
  //   e.preventDefault();
  //   setitemCount(itemCount + 1);
  // };

  // const decreaseItem = (e) => {
  //   e.preventDefault();
  //   if (itemCount == 0) {
  //   }
  //   if (itemCount > 0) {
  //     setitemCount(itemCount - 1);
  //   }
  // };
  return (
    <div className="container">
      <h2 className="cart-title">Cart items</h2>
      {cartItems.length === 0 ? (
        <p className="cart-message">No items in the cart</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="row mb-3">
              <div className="col-md-3">
                <img
                  src={item.img}
                  alt={item.product_name}
                  className="img-fluid"
                />
              </div>
              <div className="col-md-6">
                <p>Product Name: {item.product_name}</p>
                {/* Add buttons and item count here */}
              </div>
              <div className="col-md-3">
                <p>Product Brand: {item.product_brand}</p>
                <p>{item.product_price}$</p>
              </div>
            </div>
          ))}
          <p className="cart-total-price">Total Price: {totalPrice} $</p>
        </div>
      )}
    </div>
  );
}

export default Cart;
