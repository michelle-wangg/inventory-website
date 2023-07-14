import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ItemDialog from "./ItemDialog";
import { getItemsAsync } from "../redux/items/thunks";

const ItemList = () => {
  const items = useSelector((state) => state.items.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItemsAsync())}, []);

  return (
    <div>
      {items.map((item) => (
        <div className="listItem" key={item._id}>
          <h3>{item.name}</h3>
          <img src={item.imageURL} alt={item.name} />
          <ItemDialog item={item} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
