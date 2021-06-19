import React from "react";

const Item = (props) => {
  const handleClick = () => {
    props.deleteItem(props.id);
  };
  return (
    <div onClick={handleClick}>
      <li>{props.listItem} </li>
    </div>
  );
};

export default Item;