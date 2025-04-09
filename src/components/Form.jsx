import React, { useState } from "react";

function Form({ onAddItem }) {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log("Form submitted");

    const product = {
      id: Date.now(),
      title: itemName,
      quantity: quantity,
      completed: false,
    };
    console.log(product);

    onAddItem(product);
    setItemName("");
    setQuantity(1);
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div className="row">
          <div className="col-10">
            <input
              className="form-control"
              type="text"
              placeholder="Add a task"
              name="itemName"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
          </div>
          <div className="col">
            <select
              className="form-select"
              name=""
              id=""
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            >
              {Array.from({ length: 10 }, (v, i) => i + 1).map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
          <div className="col">
            <button className="btn btn-primary" type="submit">
              ADD
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
