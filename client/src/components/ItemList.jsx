import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ItemDialog from "./ItemDialog";
import { getItemsAsync } from "../redux/items/thunks";

const ItemList = () => {
  const items = useSelector((state) => state.items.list);
  const dispatch = useDispatch();

  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSortByChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    dispatch(getItemsAsync({ sortBy, sortOrder, searchQuery }));
  }, [dispatch, sortBy, sortOrder, searchQuery]);

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedItems = filteredItems.sort((a, b) => {
    if (sortBy === "name") {
      return sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    } else if (sortBy === "price") {
      return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
    }
    return 0;
  });

  return (
    <div>
      <div className="queryComponent">
        <div className="filters">
          <div>
            <label>Sort By:</label>
            <select value={sortBy} onChange={handleSortByChange}>
              <option value="">None</option>
              <option value="name">Name</option>
              <option value="price">Price</option>
            </select>
          </div>
          <div>
            <label>Sort Order:</label>
            <select value={sortOrder} onChange={handleSortOrderChange}>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
        </div>
        <div className="search">
          <label>Search:</label>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      {sortedItems.map((item) => (
        <div className="listItem" key={item.id}>
          <h3>{item.name}</h3>
          <img src={item.imageURL} alt={item.name} />
          <ItemDialog item={item} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
