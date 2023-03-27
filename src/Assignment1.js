import React, { useState } from "react";
import "./App.css";

function Assignment1() {
  const [persInfo, setPersInfo] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    address: "",
    pincode: "",
  });
  const [tableData, setTableData] = useState([]);

  function handleChange(e) {
    setPersInfo({ ...persInfo, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTableData([...tableData, persInfo]);
    setPersInfo({
      firstName: "",
      lastName: "",
      mobile: "",
      address: "",
      pincode: "",
    });
  }
  return (
    <div className="first">
      <h1>Assignment 1</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" required placeholder="First Name" name="firstName" value={persInfo.firstName} onChange={handleChange} />
        <br />
        <input type="text" required placeholder="Last Name" name="lastName" value={persInfo.lastName} onChange={handleChange} />
        <br />
        <input type="text" required placeholder="Mobile" name="mobile" value={persInfo.mobile} onChange={handleChange} />
        <br />
        <input type="text" required placeholder="Address" name="address" value={persInfo.address} onChange={handleChange} />
        <br />
        <input type="text" required placeholder="Pincode" name="pincode" value={persInfo.pincode} onChange={handleChange} />
        <br />
        <button>Submit</button>
      </form>
      <table className="table1">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Mobile</th>
            <th>Address</th>
            <th>Pincode</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((el, i) => {
            return (
              <tr key={i}>
                <td>{el.firstName}</td>
                <td>{el.lastName}</td>
                <td>{el.mobile}</td>
                <td>{el.address}</td>
                <td>{el.pincode}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Assignment1;
