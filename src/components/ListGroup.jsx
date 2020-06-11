import React from "react";

function ListGroup(props) {
  const {
    items,
    textProperty,
    SelectedItem,
    valueProperty,
    onItemSelect,
  } = props;
  return (
    <ul>
      {items.map((item) => (
        <li
          onClick={() => onItemSelect(item)}
          key={item[valueProperty]}
          className={
            item === SelectedItem ? "list-group-item active" : "list-group-item"
          }
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
}

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
