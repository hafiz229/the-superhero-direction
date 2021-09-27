import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;

  // set inital value of total item price
  let total = 0;
  // set inital value of writers name
  let names = [];
  // loop through each object properties & set updated price & name
  for (const all of cart) {
    total = total + all.salary;
    names.push(all.writer);
  }

  return (
    <div>
      <h5>Total Writers: {props.cart.length}</h5>
      <br />
      <p>Total: {total.toFixed(2)}</p>
      {names.map((name) => (
        <p key={name}>{name}</p>
      ))}
    </div>
  );
};

export default Cart;
