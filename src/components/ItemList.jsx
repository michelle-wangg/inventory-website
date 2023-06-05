import React from "react";
import ItemDialog from "./ItemDialog";

const ItemList = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <h3>{item.name}</h3>
          <img src={item.imageURL} alt={item.name} />
          <ItemDialog item={item} />
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
