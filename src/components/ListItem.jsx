import React from "react";

function ListItem({ item, onDeleteItem, onUpdateItem }) {
  return (
    <div>
      <li className="list-group-item d-flex justify-content-between">
        <div>
          <input
            className="form-check-input me-2"
            type="checkbox"
            checked={item.completed}
            onChange={() => onUpdateItem(item.id)}
          />
          <span
            style={item.completed ? { textDecoration: "line-through" } : {}}
          >
            {item.title} - {item.quantity}
          </span>
        </div>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => onDeleteItem(item.id)}
        >
          X
        </button>
      </li>
    </div>
  );
}

export default ListItem;
