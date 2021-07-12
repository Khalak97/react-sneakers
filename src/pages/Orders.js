import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Favorites.css";

import Card from "../components/Card";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `https://60dead56abbdd9001722cf88.mockapi.io/orders`
        );
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch (error) {
        alert("Error");
      }
    })();
  }, []);

  return (
    <div className="content">
      <div className="contentSearch">
        <h1>My orders</h1>
      </div>

      <div className="cards">
        {(isLoading ? [...Array(2)] : orders).map((item, index) => (
          <Card key={index} loading={isLoading} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
