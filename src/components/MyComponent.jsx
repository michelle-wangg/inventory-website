import React, { useState } from "react";
import ItemList from "./ItemList";
import ItemForm from "./ItemForm";

const MyComponent = () => {
  const jsonString = `[
    {
      "name": "apple",
      "description": "cold and crunchy",
      "price": 5,
      "unitsRemaining": 5,
      "imageURL": "https://www.applesfromny.com/wp-content/uploads/2020/06/SnapdragonNEW.png"
    },
    {
      "name": "pear",
      "description": "tasty and sweet",
      "price": 6,
      "unitsRemaining": 55,
      "imageURL": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Pears.jpg/440px-Pears.jpg"
    },
    {
      "name": "strawberry",
      "description": "taste of summer",
      "price": 2,
      "unitsRemaining": 1,
      "imageURL": "https://hips.hearstapps.com/clv.h-cdn.co/assets/15/22/1432670258-strawberry-facts2.jpg?resize=980:*"
    }
  ]`;

  const [items, setItems] = useState(JSON.parse(jsonString));

  const addItem = (item) => {
    // Add the new item to the existing items array
    setItems([...items, item]);
  };

  return (
    <div className="myComponent">
      <div className="addItemPanel">
        <h2>Add Item</h2>
        <ItemForm addItem={addItem} />
      </div>
      <div className="itemListPanel">
        <h2>Items List</h2>
        <ItemList items={items} />
      </div>
    </div>
  );
};

export default MyComponent;
