import React, { useState, useContext } from "react";
import "./Drawer.css";
import axios from "axios";

import Info from "./Info";

import AppContext from "../context";

import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";

function Drawer({ onClose, onRemove, items = [] }) {
  const { cartItems, setCartItems } = useContext(AppContext);
  const [orderId, setOrderId] = useState(null);
  const [isOrderCompleted, setIsOrderCompleted] = useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        `https://60dead56abbdd9001722cf88.mockapi.io/orders`,
        {
          items: cartItems,
        }
      );
      setOrderId(data.id);
      setIsOrderCompleted(true);
      setCartItems([]);
    } catch (error) {
      alert("Error");
    }
    setIsLoading(false);
  };

  return (
    <div className="overlay">
      <div className="drawer">
        <div className="ordersList">
          <div className="ordersHeader">
            <h2>Orders:</h2>
            <CloseIcon
              onClick={onClose}
              style={{
                fontSize: "40px",
                cursor: "pointer",
                opacity: 0.5,
              }}
            />
          </div>

          {items.length > 0 ? (
            items.map((obj) => (
              <div key={obj.id} className="orderItem">
                <img src={obj.imageUrl} width={100} height={100} alt="item" />
                <div className="orderItem__info">
                  <p>{obj.title}</p>
                  <b>${obj.price}</b>
                </div>
                <CloseIcon
                  onClick={() => {
                    onRemove(obj.id);
                  }}
                  className="removeBtn"
                />
              </div>
            ))
          ) : (
            <Info
              description={
                isOrderCompleted
                  ? `You made an order, your order id:${orderId}`
                  : "Cart is empty"
              }
            />
          )}
        </div>
        {items.length > 0 ? (
          <div className="ordersTotal">
            <div className="totalPrice">
              <p>Total:</p>
              <div></div>
              <b>$200</b>
            </div>
            <div className="totalTax">
              <p>Tax:</p>
              <div></div>
              <b>$40</b>
            </div>
            <Button
              onClick={onClickOrder}
              disabled={isLoading}
              variant="outlined"
              style={{ width: "100%", borderRadius: "20px" }}
            >
              Order now
            </Button>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default Drawer;
