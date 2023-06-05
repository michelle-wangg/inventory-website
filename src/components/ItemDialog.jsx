import React, { useState } from 'react';

const ItemDialog = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  // const subtractUnit = () => {
  //   dispatch({ type: 'SUBTRACT_UNIT', id: item.id });
  // };

  // const addUnit = () => {
  //   dispatch({ type: 'ADD_UNIT', id: item.id });
  // };

  return (
    <div>
      <button onClick={openDialog}>View Details</button>

      {isOpen && (
        <div className="dialog">
          <p>{item.description}</p>
          <p>Price: ${item.price}</p>
          <p>Units Remaining: {item.unitsRemaining}</p>

          {/* <button onClick={subtractUnit}> - </button> */}
          <button onClick={closeDialog}>Close</button>
          {/* <button onClick={addUnit}> + </button> */}
        </div>
      )}
    </div>
  );
};

export default ItemDialog;
