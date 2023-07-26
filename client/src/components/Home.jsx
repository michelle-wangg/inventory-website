import React from 'react';
import ItemList from "./ItemList";
import ItemForm from "./ItemForm";
// comment to Home
const Home = () => {

  return (
    <div className="home">
      <div className="addItemPanel">
        <h2>Add Item</h2>
        <ItemForm />
      </div>
      <div className="itemListPanel">
        <h2>Items List</h2>
        <br />
        <ItemList />
      </div>
    </div>
  );
};

export default Home;
