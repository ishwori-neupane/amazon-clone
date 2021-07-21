import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import Order from "./Order";
import "./Orders.css";
import { useStateValue } from "./StateProvider";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();

  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);
  return (
    <>
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
      <div className="product">
        <div className="product__info">
          <p>
            GC Fashion - Offering Embroidered Royskart Ladies Party Wear Saree
            at Rs 1580/piece in Bengaluru, Karnataka. Read about company. Get
            contact details ...
          </p>
          <p className="product__price">
            <small>$</small>
            <strong>500</strong>
          </p>
          <div className="product__rating">
            <p>⭐⭐⭐</p>
          </div>
        </div>
        <img
          src="https://5.imimg.com/data5/JD/OW/MY-43862582/ladies-party-wear-saree-500x500.jpg"
          alt=""
        />
      </div>
    </>
  );
}

export default Orders;
