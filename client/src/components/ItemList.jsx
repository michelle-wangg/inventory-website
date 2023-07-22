import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ItemDialog from "./ItemDialog";
import { getItemsAsync } from "../redux/items/thunks";

const ItemList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const items = useSelector((state) => state.items.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItemsAsync(searchTerm));
  }, [searchTerm, dispatch]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortOrder = () => {
    setSortOrder((prevSortOrder) => (prevSortOrder === "asc" ? "desc" : "asc"));
  };

  const sortedItems = [...items].sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (sortOrder === "asc") {
      return nameA.localeCompare(nameB);
    } else {
      return nameB.localeCompare(nameA);
    }
  });

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search items..."
      />
      <button onClick={handleSortOrder}>
        Sort {sortOrder === "asc" ? "A-Z" : "Z-A"}
      </button>
      {sortedItems.length > 0 ? (
        sortedItems.map((item) => (
          <div className="listItem" key={item._id}>
            <h3>{item.name}</h3>
            <img src={item.imageURL} alt={item.name} />
            <ItemDialog item={item} />
          </div>
        ))
      ) : (
        <p>No items found</p>
      )}
    </div>
  );
};

export default ItemList;
