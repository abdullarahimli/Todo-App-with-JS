import React from "react";

function Summary({ items }) {
  const itemsCount = items.length;
  const completedItemsCount = items.filter((i) => i.completed).length;
  return (
    <div className="card-footer d-flex align-items-center justify-content-center">
      {itemsCount === completedItemsCount ? (
        <p>Alisveris tamamlandi</p>
      ) : (
        <p className="mb-0">
          ALisveris sepetinizde {itemsCount} urunden {completedItemsCount}{" "}
          tanesini aldiniz
        </p>
      )}
    </div>
  );
}

export default Summary;
