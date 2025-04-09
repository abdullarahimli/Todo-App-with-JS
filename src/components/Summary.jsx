import React from "react";

function Summary({ items }) {
  const itemsCount = items.length;
  if (itemsCount === 0) {
    return (
      <div className="card-footer d-flex align-items-center justify-content-center">
        <p className="mb-0">There are no tasks on your list</p>
      </div>
    );
  }
  const completedItemsCount = items.filter((i) => i.completed).length;
  return (
    <div className="card-footer d-flex align-items-center justify-content-center">
      {itemsCount === completedItemsCount ? (
        <p>Tasks completed</p>
      ) : (
        <p className="mb-0">
          You have completed {completedItemsCount} of the {itemsCount} on your
          task list.
        </p>
      )}
    </div>
  );
}

export default Summary;
