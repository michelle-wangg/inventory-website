import React, { useState } from "react";
import "../styles.css";

const ItemForm = ({ addItem }) => {
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [unitsRemaining, setUnitsRemaining] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create an item object using the form data
    const item = {
      name: itemName,
      description: description,
      price: price,
      unitsRemaining: unitsRemaining,
      imageURL: imageUrl,
    };
    // Pass the item object to the parent component's addItem function
    addItem(item);
    // Reset the form inputs
    setItemName("");
    setDescription("");
    setPrice("");
    setUnitsRemaining("");
    setImageUrl("");
  };

  const handleClear = () => {
    // Reset the form inputs
    setItemName("");
    setDescription("");
    setPrice("");
    setUnitsRemaining("");
    setImageUrl("");
  };

  return (
    <div className="addItem">
      <h3>Item Form</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Item Name:
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <br />
        <label>
          Units Remaining:
          <input
            type="number"
            value={unitsRemaining}
            onChange={(e) => setUnitsRemaining(e.target.value)}
          />
        </label>
        <br />
        <label>
          Image URL:
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </label>
        <br />
        <div className='buttons'>
          <button type="submit">Add Item</button>
          <button type="button" onClick={handleClear}>
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default ItemForm;
