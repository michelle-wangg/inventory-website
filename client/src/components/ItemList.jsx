import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ItemDialog from "./ItemDialog";
import { getItemsAsync, searchItemsAsync } from "../redux/items/thunks";

const ItemList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const items = useSelector((state) => state.items.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItemsAsync(searchTerm));
  }, [searchTerm, dispatch]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search items..."
      />
      {Array.isArray(items) && items.length > 0 ? (
        items.map((item) => (
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
