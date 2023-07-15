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
    console.error("Error adding item: ", err);
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
  try {
    const response = await fetch(`http://localhost:5050/items/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      const data = await response.json();
      const errorMsg = data?.message;
      throw new Error(errorMsg);
    }
  } catch (error) {
    console.error("Error deleting item:", error);
    throw error;
  }
};

const addUnit = async (id) => {
  try {
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
  } catch (error) {
    console.error("Error adding unit:", error);
    throw error;
  }
};

const subtractUnit = async (id) => {
  try {
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
  } catch (error) {
    console.error("Error subtracting unit:", error);
    throw error;
  }
};

const searchItems = async (query) => {
  try {
    const response = await fetch(`http://localhost:5050/items/search?query=${encodeURIComponent(query)}`);
    const searchResults = await response.json();
    return searchResults;
  } catch (error) {
    console.error("Error searching items:", error);
    throw error;
  }
};

const ItemService = {
  addItem,
  getItems,
  deleteItem,
  addUnit,
  subtractUnit,
  searchItems,
};

export default ItemService;
