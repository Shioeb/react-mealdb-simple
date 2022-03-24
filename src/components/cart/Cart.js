import React from "react";
import "./Cart.css";

function Cart(props) {
  const { cart } = props;
  console.log(cart);
  return (
    <div className="cart-container">
      <div className="cart">
        <h1>Cart</h1>
        {/* {cart.map((c) => c + ", ")} */}
        {cart.map((mealName, key) => {
          return <li key={key}>{mealName}</li>;
        })}
      </div>
    </div>
  );
}

export default Cart;
