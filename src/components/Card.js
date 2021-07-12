import React, { useState, useContext } from "react";
import "./Card.css";

import AppContext from "../context";

import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AddIcon from "@material-ui/icons/Add";
import DoneIcon from "@material-ui/icons/Done";
import Skeleton from "@material-ui/lab/Skeleton";

function Card({
  id,
  title,
  imageUrl,
  price,
  onFavorite,
  onPlus,
  favorited = false,
  loading = false,
}) {
  const { isItemAdded } = useContext(AppContext);
  const [isFavorite, setIsFavorite] = useState(favorited);

  const onClickPlus = () => {
    onPlus({ id, title, imageUrl, price });
  };

  const onClickFavorite = () => {
    onFavorite({ id, title, imageUrl, price });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="card">
      {loading ? (
        <div>
          <Skeleton variant="rect" width={210} height={118} />
          <Skeleton variant="text" />
          <Skeleton variant="text" />
        </div>
      ) : (
        <>
          <FavoriteIcon
            onClick={onClickFavorite}
            style={{
              display: onFavorite ? "block" : "none",
              fontSize: 40,
              color: isFavorite === !true ? "#c0c0c0" : "orange",
              position: "absolute",
              padding: "10px",
              cursor: "pointer",
            }}
          />

          <img src={imageUrl} width={180} height={180} alt="title" />
          <h5>{title}</h5>
          <div className="cardBottom">
            <div className="cardInfo">
              <p>Price:</p>
              <b>${price}</b>
            </div>

            {isItemAdded(id) === !true ? (
              <AddIcon
                onClick={onClickPlus}
                style={{
                  display: onPlus ? "block" : "none",
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
                  display: onPlus ? "block" : "none",
                  fontSize: 40,
                  color: "#1a9900",
                  cursor: "pointer",
                  border: "1px solid #f3f3f3",
                  borderRadius: "100%",
                }}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
