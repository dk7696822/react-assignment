import React, { useState } from "react";
import "./App.css";

function Assignment3() {
  const [input, setInput] = useState([{ value: "" }]);
  function handleChange(idx, e) {
    const values = [...input];
    values[idx].value = e.target.value;
    setInput(values);
  }
  function handleAddInput(e) {
    e.preventDefault();
    const values = [...input];
    values.push({ value: "" });
    setInput(values);
  }
  return (
    <div className="third">
      <h1>Assignment 3</h1>
      {input.map((el, i) => {
        return (
          <div key={i}>
            <input type="text" value={el.value} onChange={(e) => handleChange(i, e)} />
          </div>
        );
      })}
      <button onClick={handleAddInput}>Add More</button>
    </div>
  );
}

export default Assignment3;
