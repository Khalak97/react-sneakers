import React from "react";
import "./Favorites.css";

import Card from "../components/Card";

function Favorites({ items, onAddToFavorite }) {
  return (
    <div className="content">
      <div className="contentSearch">
        <h1>My favorites</h1>
      </div>

      <div className="cards">
        {items.map((item, index) => (
          <Card
            key={index}
            favorited={true}
            onFavorite={onAddToFavorite}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
