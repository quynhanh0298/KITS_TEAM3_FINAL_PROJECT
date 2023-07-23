import CardIcon from "../../assets/images/credit-card.svg";
import ProductImage from "../../assets/images/product-image.jpg";
import PaypalCheckoutButton from "./PaypalCheckoutButton";
import React, { useState } from "react";
import Cards from "react-credit-cards-2";
import { useSelector } from "react-redux";
import "react-credit-cards-2/dist/es/styles-compiled.css";

import "../Checkout/checkout.css";

const Checkout = () => {
  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };
  const cart = {
    description: "Elucidator",
    price: 19,
  };
  return (
    <div className="checkout">
      {/* <h1>PayPal Checkout</h1>
      <p className="checkout-title">Design+Code React Hooks Course</p>
      <p className="checkout-description">
        Learn how to build a website with React Hooks
      </p>
      <h1 className="checkout-price">$19</h1>
      <img
        className="checkout-product-image"
        src={ProductImage}
        alt="Product"
      /> */}
      <div className="card-contents">
        <Cards
          number={state.number}
          expiry={state.expiry}
          cvc={state.cvc}
          name={state.name}
          focused={state.focus}
        />
        <form className="card-form">
          <input
            className="card-number"
            type="number"
            name="number"
            placeholder="Card Number"
            value={state.number}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <input
            className="card-name"
            type="name"
            name="name"
            placeholder="Name"
            value={state.name}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <div className="card-form-bottom">
            <input
              className="card-expiry"
              type="tel"
              name="expiry"
              pattern="\d\d/\d\d"
              placeholder="Valid Thru"
              value={state.expiry}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
            <input
              className="card-cvc"
              type="number"
              name="cvc"
              placeholder="CVC"
              value={state.cvc}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
        </form>
      </div>
      <button className="checkout-button">
        <div className="grey-circle">
          <div className="purple-circle">
            <img className="icon" src={CardIcon} alt="credit-card-icon" />
          </div>
        </div>
        <div className="text-container">
          <p className="text">Buy</p>
        </div>
      </button>
      <div className="separator"></div>
      <div className="paypal">
        <p className="checkout-title">OR, PAY WITH PAYPAL</p>
        <div className="paypal-button-container">
          <PaypalCheckoutButton cart={cart} />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
