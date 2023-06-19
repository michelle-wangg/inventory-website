import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ItemDialog from "./ItemDialog";
import { getItemsAsync } from "../redux/items/thunks";

const ItemList = () => {
  const items = useSelector(state => state.items.list);
  console.log(items); 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItemsAsync());
  }, [dispatch]);

  return items.map((item) => (
    <div>
      <h3>{item.name}</h3>
      <img src={item.imageURL} alt={item.name}/>
      <ItemDialog
        item={item} key={item.id}
      />
    </div>
  ));
};

export default ItemList;
