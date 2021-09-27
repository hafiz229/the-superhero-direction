import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Card.css";

const Card = (props) => {
  // destructuring properties of item
  const { writer, img, age, price, book, salary } = props.item;
  const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;
  return (
    <div>
      <div className="card card-design">
        <img src={img} className="card-img-top" alt="" />
        <div className="d-flex flex-column align-items-center">
          <div className="card-body text-start">
            <p className="card-text">
              <b>Writer:</b> {writer}
            </p>
            <p className="card-text">
              <b>Age:</b> {age}
            </p>
            <p className="card-text">
              <b>Book:</b> {book}
            </p>
            <p className="card-text">
              <b>Book Price:</b> {price}
            </p>
            <p className="card-text">
              <b>Salary:</b> {salary}
            </p>
            <button
              onClick={() => props.handleAddToCart(props.item)}
              className="btn btn-primary"
            >
              {cartIcon}Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
