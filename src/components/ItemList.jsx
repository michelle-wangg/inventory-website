import React from "react";
import ItemDialog from "./ItemDialog";

const ItemList = ({ items, dispatch }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <h3>{item.name}</h3>
          <img src={item.imageURL} alt={item.name} />
          <ItemDialog item={item} dispatch={dispatch} />
        </li>
      ))}
    </ul>
  );
};

export default ItemList;

