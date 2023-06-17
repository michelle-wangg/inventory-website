import React, { useState } from "react";

function ItemDialog({ item, dispatch }) {
  const [isOpen, setIsOpen] = useState(false);

  function openDialog() {
    setIsOpen(true);
  };

  function closeDialog() {
    setIsOpen(false);
  };

  function subtractUnit() {
    if (item.unitsRemaining <= 1) {
      closeDialog();
      dispatch({ type: "REMOVE_ITEM", id: item.id });
    } else {
      dispatch({ type: "SUBTRACT_UNIT", id: item.id });
    }
  };

  function addUnit () {
    dispatch({ type: "ADD_UNIT", id: item.id });
  };

  function removeItem() {
    dispatch({ type: "REMOVE_ITEM", id: item.id });
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

          <button onClick={subtractUnit}>-</button>
          <button onClick={closeDialog}>Close</button>
          <button onClick={addUnit}>+</button>
        </div>
      )}
    </div>
  );
};

export default ItemDialog;
