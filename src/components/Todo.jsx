import React, { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import List from "./List";
import Summary from "./Summary";

function Todo() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((prevItems) => [...prevItems, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleUpdateItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  }
  return (
    <div className="container my-3">
      <div className="card">
        <Header />
        <div className="card-body">
          <Form onAddItem={handleAddItem} />
          <List
            items={items}
            onDeleteItem={handleDeleteItem}
            onUpdateItem={handleUpdateItem}
          />
        </div>
        <Summary items={items} />
      </div>
    </div>
  );
}

export default Todo;
