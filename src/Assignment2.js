import React, { useState } from "react";
import "./App.css";

function Assignment2() {
  const date = new Date();
  const [tableData, setTableData] = useState([]);
  function handleClick(e) {
    e.preventDefault();
    setTableData([...tableData, { name: e.target.innerHTML, date: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}` }]);
  }
  return (
    <div className="second">
      <h1>Assignment 2</h1>
      <button onClick={handleClick}>Button A</button>
      <button onClick={handleClick}>Button B</button>
      <button onClick={handleClick}>Button C</button>
      <button onClick={handleClick}>Button D</button>
      <table>
        <thead>
          <tr>
            <th>Button Name</th>
            <th>When I clicked</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((el, i) => {
            return (
              <tr key={i}>
                <td>{el.name}</td>
                <td>{el.date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Assignment2;
