import React, { useState } from "react";
import {
  SortableContainer,
  SortableElement,
  arrayMove,
} from "react-sortable-hoc";
import "./DraggableElements.scss";

const list = [
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5",
  "Item 6",
  "Item 7",
  "Item 8",
  "Item 9",
  "Item 10",
  "Item 11",
  "Item 12",
  "Item 13",
  "Item 14",
  "Item 15",
  "Item 16",
  "Item 17",
  "Item 18",
];

const SortableListItem = SortableElement(({ item }) => {
  return <div className="list-group-item"> {item} </div>;
});

const SortableList = SortableContainer(({ items }) => {
  return (
    <div className="list-group">
      {items.map((item, index) => {
        return (
          <SortableListItem key={`item-${index}`} index={index} item={item} />
        );
      })}
    </div>
  );
});

const DraggableElements = () => {
  const [items, setItems] = useState(list);
  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems(arrayMove(items, oldIndex, newIndex));
  };

  return (
    <div className="container">
      <SortableList axis="xy" items={items} onSortEnd={onSortEnd} />
    </div>
  );
};

export default DraggableElements;
