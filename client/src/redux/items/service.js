const addItem = async (item) => {
  try {
    const response = await fetch('http://localhost:5050/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    });

    const data = await response.json();
    if (!response.ok) {
      const errorMsg = data?.message;
      throw new Error(errorMsg);
    }
    return data;
  } catch (err) {
    console.error("error adding item: ", err);
    throw err;
  }
};

const getItems = async (search) => {
  try {
    let url = 'http://localhost:5050/items';
    if (search) {
      url += `?search=${encodeURIComponent(search)}`;
    }
    const response = await fetch(url);
    const items = await response.json();
    return items;
  } catch (error) {
    console.error("Error getting items:", error);
    throw error;
  }
};

const deleteItem = async (id) => {
  const response = await fetch(`http://localhost:5050/items/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    const data = await response.json();
    const errorMsg = data?.message;
    throw new Error(errorMsg);
  }
};

const addUnit = async (id) => {
  const response = await fetch(
    `http://localhost:5050/items/${id}/addUnit`,
    {
      method: 'PATCH',
    }
  );

  if (!response.ok) {
    const data = await response.json();
    const errorMsg = data?.message;
    throw new Error(errorMsg);
  }
};

const subtractUnit = async (id) => {
  const response = await fetch(
    `http://localhost:5050/items/${id}/subtractUnit`,
    {
      method: 'PATCH',
    }
  );

  if (!response.ok) {
    const data = await response.json();
    const errorMsg = data?.message;
    throw new Error(errorMsg);
  }
};

const searchItems = async (query) => {
  const items = await getItems(); // Get all items

  if (!query) {
    return items; // Return all items if no query provided
  }

  // Search for items based on the provided query
  const searchResults = items.filter(
    (item) =>
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
  );

  return searchResults;
};


export default {
  addItem,
  getItems,
  deleteItem,
  addUnit,
  subtractUnit,
  searchItems,
};
