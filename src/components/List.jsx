import React from "react";
import ListItem from "./ListItem";
import { products } from "../data.js";

function List({ items, onDeleteItem, onUpdateItem }) {
  return (
    <div>
      <>
        {items.length > 0 ? (
          <ul className="list-group mt-3">
            {items &&
              items.map((item) => (
                <ListItem
                  onUpdateItem={onUpdateItem}
                  onDeleteItem={onDeleteItem}
                  item={item}
                  key={item.id}
                />
              ))}
          </ul>
        ) : (
          <p className="text-danger">Listeniz bos</p>
        )}
      </>
    </div>
  );
}

export default List;
