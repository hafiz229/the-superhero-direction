import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Cart from "../Cart/Cart";
import "./Hire.css";

const Hire = () => {
  // get & set data
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

  // load data
  useEffect(() => {
    fetch("./writers.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const handleAddToCart = (item) => {
    const newCart = [...cart, item];
    setCart(newCart);
  };
  return (
    <div className="container d-flex justify-content-between">
      <div></div>
      <div className="item-container ">
        {items.map((item) => (
          <Card
            key={item.id}
            item={item}
            handleAddToCart={handleAddToCart}
          ></Card>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} items={items}></Cart>
      </div>
    </div>
  );
};

export default Hire;
