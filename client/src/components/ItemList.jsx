import React, { useEffect, useState } from "react";

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("http://localhost:5050/items");
        if (response.ok) {
          const data = await response.json();
          setItems(data);
        } else {
          throw new Error("Error fetching items");
        }
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div>
      <h1>Item List</h1>
      {items.length === 0 ? (
        <p>No items found.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item._id}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Price: {item.price}</p>
              <p>Units Remaining: {item.unitsRemaining}</p>
              <img src={item.imageURL} alt={item.name} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ItemList;
