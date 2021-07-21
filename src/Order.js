import moment from "moment";
import React from "react";
import CurrencyFormat from "react-currency-format";
import CheckoutProduct from "./CheckoutProduct";
import { getBasketTotal } from "./reducer";
import "./Order.css";
import { useStateValue } from "./StateProvider";

function Order() {
  return (
    <div className="product">
      <div className="product__info">
        <p>
          Uploaded by: Encore +, Nov 6, 2017 1.19M Views·30.2K Likes Recipient
          of the Academy Award
        </p>
        <p className="product__price">
          <small>$</small>
          <strong>10</strong>
        </p>
        <div className="product__rating">
          <p>⭐⭐⭐⭐</p>
        </div>
      </div>
      <img
        src="https://image.slidesharecdn.com/theoldmanandthesea-150405063826-conversion-gate01/95/the-old-man-and-the-sea-1-638.jpg?cb=1428216174"
        alt=""
      />
    </div>
  );
}

export default Order;
