const addItem = async (item) => {
  const response = await fetch('http://localhost:3001/items', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });

  const data = await response.json();
  if (!response.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg)
  }
  return data;
};

const getItems = async () => {
  const response = await fetch('http://localhost:3001/items', {
    method: 'GET'
  });
  return response.json();
};

const deleteItem = async (itemId) => {
  const response = await fetch(`http://localhost:3001/items/${itemId}`, {
    method: 'DELETE'
  });

  if (!response.ok) {
    const data = await response.json();
    const errorMsg = data?.message;
    throw new Error(errorMsg);
  }
};

const addUnit = async (itemId) => {
  const response = await fetch(`http://localhost:3001/items/${itemId}/addUnit`, {
    method: 'PATCH'
  });

  if (!response.ok) {
    const data = await response.json();
    const errorMsg = data?.message;
    throw new Error(errorMsg);
  }
};

const subtractUnit = async (itemId) => {
  const response = await fetch(`http://localhost:3001/items/${itemId}/subtractUnit`, {
    method: 'PATCH'
  });

  if (!response.ok) {
    const data = await response.json();
    const errorMsg = data?.message;
    throw new Error(errorMsg);
  }
};

export {
  addItem,
  getItems,
  deleteItem,
  addUnit,
  subtractUnit
};
