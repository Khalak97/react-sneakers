import React from "react";
import "./Favorites.css";

import AppContext from "../context";

import Card from "../components/Card";

function Favorites() {
  const { favorites, onAddToFavorite } = React.useContext(AppContext);

  return (
    <div className="content">
      <div className="contentSearch">
        <h1>My favorites</h1>
      </div>

      <div className="cards">
        {favorites.map((item, index) => (
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
