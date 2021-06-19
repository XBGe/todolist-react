import React from "react";

const InputForm = (props) => {
  return (
    <div className="form">
      <input
        value={props.inputValue}
        onChange={props.handleInput}
        type="text"
      />
      <button onClick={props.handleAdd}>
        <span>Add</span>
      </button>
    </div>
  );
};

export default InputForm;