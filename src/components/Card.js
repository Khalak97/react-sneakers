import React, { useState } from "react";
import "./Card.css";

import FavoriteIcon from "@material-ui/icons/Favorite";
import AddIcon from "@material-ui/icons/Add";
import DoneIcon from "@material-ui/icons/Done";

function Card({
  id,
  title,
  imageUrl,
  price,
  onFavorite,
  onPlus,
  favorited = false,
}) {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(favorited);

  const onClickPlus = () => {
    onPlus({ id, title, imageUrl, price });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite({ id, title, imageUrl, price });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="card">
      {isFavorite === !true ? (
        <FavoriteIcon
          onClick={onClickFavorite}
          style={{
            fontSize: 40,
            color: "#c0c0c0",
            position: "absolute",
            padding: "10px",
            cursor: "pointer",
          }}
        />
      ) : (
        <FavoriteIcon
          onClick={onClickFavorite}
          style={{
            fontSize: 40,
            color: "orange",
            position: "absolute",
            padding: "10px",
            cursor: "pointer",
          }}
        />
      )}

      <img src={imageUrl} width={180} height={180} alt="title" />
      <h5>{title}</h5>
      <div className="cardBottom">
        <div className="cardInfo">
          <p>Price:</p>
          <b>${price}</b>
        </div>

        {isAdded === !true ? (
          <AddIcon
            onClick={onClickPlus}
            style={{
              fontSize: 40,
              color: "#cecece",
              cursor: "pointer",
              border: "1px solid #f3f3f3",
              borderRadius: "100%",
            }}
          />
        ) : (
          <DoneIcon
            onClick={onClickPlus}
            style={{
              fontSize: 40,
              color: "#1a9900",
              cursor: "pointer",
              border: "1px solid #f3f3f3",
              borderRadius: "100%",
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Card;
