import React from "react";

function ListItem({ item, onDeleteItem, onUpdateItem }) {
  return (
    <div className="container row">
      <li className="list-group-item d-flex justify-content-between mb-3">
        <div className="col-10">
          <input
            className="form-check-input me-2"
            type="checkbox"
            checked={item.completed}
            onChange={() => onUpdateItem(item.id)}
          />
          <span
            style={item.completed ? { textDecoration: "line-through" } : {}}
          >
            {item.title}
          </span>
        </div>
        <div>{item.quantity}</div>
        <div>
          <button
            className="btn btn-sm btn-danger"
            onClick={() => onDeleteItem(item.id)}
          >
            X
          </button>
        </div>
      </li>
    </div>
  );
}

export default ListItem;
