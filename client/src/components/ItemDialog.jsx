import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteItemAsync, addUnitAsync, getItemsAsync, subtractUnitAsync } from "../redux/items/thunks";

const ItemDialog = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  const subtractUnit = () => {
    dispatch(subtractUnitAsync(item.id));
    dispatch(getItemsAsync());
  };

  const addUnit = () => {
    dispatch(addUnitAsync(item.id));
    dispatch(getItemsAsync());

  };

  const removeItem = () => {
    dispatch(deleteItemAsync(item.id));
  };

  return (
    <div>
      <button onClick={openDialog}>View Details</button>
      <button onClick={removeItem}>Remove Item</button>
      {isOpen && (
        <div className="dialog">
          <p>{item.description}</p>
          <p>Price: ${item.price}</p>
          <p>Units Remaining: {item.unitsRemaining}</p>

          <button type="submit" onClick={subtractUnit}> - </button>
          <button onClick={closeDialog}>Close</button>
          <button type="submit" onClick={addUnit}> + </button>
        </div>
      )}
    </div>
  );
};

export default ItemDialog;
