import React from "react";
import "./Home.css";

import Card from "../components/Card";

import SearchIcon from "@material-ui/icons/Search";

function Home({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
}) {
  return (
    <div className="content">
      <div className="contentSearch">
        <h1>{searchValue ? `Search: "${searchValue}"` : "All sneakers"}</h1>
        <div className="search">
          <SearchIcon style={{ fontSize: 40, color: "#c0c0c0" }} />
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              className="clear cu-p"
              src=""
              alt="Clear"
            />
          )}
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder="Search"
          />
        </div>
      </div>

      <div className="cards">
        {items
          .filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((item, index) => (
            <Card
              key={index}
              onFavorite={(obj) => onAddToFavorite(obj)}
              onPlus={(obj) => onAddToCart(obj)}
              {...item}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
