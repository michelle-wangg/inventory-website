import React, { useState } from "react";
import "../styles.css";
import { useDispatch } from "react-redux";
import { addItemAsync } from "../redux/items/thunks";

export const ItemForm = () => {
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [unitsRemaining, setUnitsRemaining] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const dispatch = useDispatch();

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
    dispatch(addItemAsync(item));
    // Reset the form inputs
    handleClear();
  };

  function handleClear() {
    // Reset the form inputs
    setItemName("");
    setDescription("");
    setPrice("");
    setUnitsRemaining("");
    setImageUrl("");
  };

  return (
    <div className="addItem">
      <form onSubmit={handleSubmit}>
        <label>
          Item Name:
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="number"
            min="0"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Units Remaining:
          <input
            type="number"
            min="0"
            value={unitsRemaining}
            onChange={(e) => setUnitsRemaining(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Image URL:
          <input
            type="url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
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
