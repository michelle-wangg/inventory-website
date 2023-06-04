import React, { useState } from "react";
import '../styles.css';

const ItemForm = ({ addItem }) => {
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create an item object using the form data
    const item = {
      name: itemName,
      description: description,
      price: price,
      imageUrl: imageUrl,
    };
    // Pass the item object to the parent component's addItem function
    addItem(item);
    // Reset the form inputs
    setItemName("");
    setDescription("");
    setPrice("");
    setImageUrl("");
  };

  const handleClear = () => {
    // Reset the form inputs
    setItemName("");
    setDescription("");
    setPrice("");
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
          <input
            type="textArea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
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
        <button type="submit">Add Item</button>
        <button type="button" onClick={handleClear}>
          Clear
        </button>
      </form>
    </div>
  );
};

export default ItemForm;
