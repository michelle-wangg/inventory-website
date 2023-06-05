import React, { useReducer, useState } from "react";
import ItemList from "./ItemList";
import ItemForm from "./ItemForm";

const itemReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const newItem = { ...action.item, id: Date.now() };
      return [...state, newItem];
    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.id);
    case "SUBTRACT_UNIT":
      return state.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            unitsRemaining: parseFloat(item.unitsRemaining) - 1,
          };
        }
        return item;
      });
    case "ADD_UNIT":
      return state.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            unitsRemaining: parseFloat(item.unitsRemaining) + 1,
          };
        }
        return item;
      });
    case 'CLEAR_ITEMS':
      return [];
    default:
      return state;
  }
};

const MyComponent = () => {
  const initialItems = [
    {
      id: 1,
      name: "apple",
      description: "cold and crunchy",
      price: 5,
      unitsRemaining: 5,
      imageURL:
        "https://www.applesfromny.com/wp-content/uploads/2020/06/SnapdragonNEW.png",
    },
    {
      id: 2,
      name: "pear",
      description: "tasty and sweet",
      price: 6,
      unitsRemaining: 55,
      imageURL:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Pears.jpg/440px-Pears.jpg",
    },
    {
      id: 3,
      name: "strawberry",
      description: "taste of summer",
      price: 2,
      unitsRemaining: 1,
      imageURL:
        "https://hips.hearstapps.com/clv.h-cdn.co/assets/15/22/1432670258-strawberry-facts2.jpg?resize=980:*",
    },
  ];

  const [items, dispatch] = useReducer(itemReducer, initialItems);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const clearAll = () => {
    dispatch({ type: "CLEAR_ITEMS"});
  }

  return (
    <div className="myComponent">
      <div className="addItemPanel">
        <h2>Add Item</h2>
        <ItemForm dispatch={dispatch} />
      </div>
      <div className="itemListPanel">
        <h2>Items List</h2>
        <button onClick={clearAll}>Clear all</button>
        <br />
        {/* Search input field */}
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search items"
        />

        {/* ItemList component */}
        <ItemList items={filteredItems} dispatch={dispatch} />
      </div>
    </div>
  );
};

export default MyComponent;
