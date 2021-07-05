import React from "react";

import "./OrderItem.css";

import CloseIcon from "@material-ui/icons/Close";

function OrderItem({ title, imageUrl, price }) {
  return (
    <div className="orderItem">
      <img src={imageUrl} width={100} height={100} alt="item" />
      <div className="orderItem__info">
        <p>{title}</p>
        <b>${price}</b>
      </div>
      <CloseIcon className="removeBtn" />
    </div>
  );
}

export default OrderItem;
