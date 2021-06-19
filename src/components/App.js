import React, { useState } from "react";
import Header from "./Header";
import Item from "./Item";
import InputForm from "./InputForm";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [listItems, setListItems] = useState([]);

  //get inputValue
  const handleInput = (e) => {
    const newInput = e.target.value;
    setInputValue(newInput);
  };
  //add item to array
  const handleAdd = (e) => {
    setListItems([...listItems, inputValue]);
    setInputValue("");

    e.preventDefault();
  };
  //delete item from array
  const deleteItem = (id) => {
    setListItems(() => {
      return listItems.filter((item, index) => {
        return index !== id;
      });
    });
  };
  //render all array items
  const renderItems = listItems.map((listItem, index) => {
    return (
      <Item
        key={Math.floor(Math.random() * 1000)}
        id={index}
        listItem={listItem}
        deleteItem={deleteItem}
      />
    );
  });

  return (
    <div className="container">
      <Header />
      <InputForm
        inputValue={inputValue}
        handleInput={handleInput}
        handleAdd={handleAdd}
      />
      <div>
        <ul>{renderItems}</ul>
      </div>
    </div>
  );
};

export default App;
