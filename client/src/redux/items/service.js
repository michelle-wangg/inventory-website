const addItem = async (item) => {
  const response = await fetch('http://localhost:3001/items', {
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
};

const getItems = async (options) => {
  let url = 'http://localhost:3001/items';
  if (options) {
    const { sortBy, filterBy } = options;
    const params = new URLSearchParams();

    if (sortBy) {
      params.append('sortBy', sortBy);
    }

    if (filterBy) {
      Object.entries(filterBy).forEach(([key, value]) => {
        params.append(key, value);
      });
    }

    url += `?${params.toString()}`;
  }

  const response = await fetch(url, {
    method: 'GET',
  });
  return response.json();
};

const deleteItem = async (itemId) => {
  const response = await fetch(`http://localhost:3001/items/${itemId}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    const data = await response.json();
    const errorMsg = data?.message;
    throw new Error(errorMsg);
  }
};

const addUnit = async (itemId) => {
  const response = await fetch(
    `http://localhost:3001/items/${itemId}/addUnit`,
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

const subtractUnit = async (itemId) => {
  const response = await fetch(
    `http://localhost:3001/items/${itemId}/subtractUnit`,
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
