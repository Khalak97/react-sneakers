import React, { useContext } from "react";
import "./Home.css";

import AppContext from "../context";

import Card from "../components/Card";

import SearchIcon from "@material-ui/icons/Search";

function Home({
  items,
  cartItems,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
  isLoading,
}) {
  const { isItemAdded } = useContext(AppContext);

  const renderItems = () => {
    const filtredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (isLoading ? [...Array(4)] : filtredItems).map((item, index) => (
      <Card
        key={index}
        onFavorite={(obj) => onAddToFavorite(obj)}
        onPlus={(obj) => onAddToCart(obj)}
        added={isItemAdded(item && item.id)}
        loading={isLoading}
        {...item}
      />
    ));
  };

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
      <div className="cards">{renderItems()}</div>
    </div>
  );
}

export default Home;
