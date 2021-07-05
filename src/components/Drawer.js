import React from "react";
import "./Drawer.css";

import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";

function Drawer({ onClose, onRemove, items = [] }) {
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
            <p
              style={{
                fontSize: "40px",
                marginTop: "100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Cart is empty
            </p>
          )}
        </div>

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
            variant="outlined"
            style={{ width: "100%", borderRadius: "20px" }}
          >
            Order now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
