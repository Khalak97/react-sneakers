import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FavoriteIcon from "@material-ui/icons/Favorite";

function Header({ onClickCart }) {
  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/">
          <img
            src="https://image.flaticon.com/icons/png/512/2589/2589903.png"
            className="logo"
            alt="sneakers"
          />
        </Link>

        <div className="headerInfo">
          <h3>React Sneakers</h3>
          <p>Online shop</p>
        </div>
      </div>

      <div className="headerRight">
        <div onClick={onClickCart} className="userBill">
          <ShoppingCartIcon
            style={{
              fontSize: 30,
              color: "#c0c0c0",
              margin: "10px",
              cursor: "pointer",
            }}
          />
          <b style={{ cursor: "pointer" }}>$1000</b>
        </div>

        <Link to="/favorites">
          <FavoriteIcon
            style={{
              fontSize: 30,
              color: "#c0c0c0",
              margin: "10px",
              cursor: "pointer",
            }}
          />
        </Link>

        <AccountCircleIcon
          style={{
            fontSize: 30,
            color: "#c0c0c0",
            margin: "10px",
            cursor: "pointer",
          }}
        />
      </div>
    </div>
  );
}

export default Header;
