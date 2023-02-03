import React from "react";

import "./Info.scss";
const Info = ({ next, value, handleChange }) => {
  return (
    <div className="info">
      <h2>Personal info</h2>
      <p>Please provide your name, email address, and phone number.</p>
      <div className="name">
        <label htmlFor="name">Name </label>
        <input type="text" onChange={handleChange("name")} value={value.name} />
      </div>
      <div className="email">
        <label htmlFor="email">Email </label>
        <input
          type="email"
          onChange={handleChange("email")}
          value={value.email}
        />
      </div>
      <div className="phone__no">
        <label htmlFor="phone_no">Password </label>
        <input
          type="number"
          onChange={handleChange("phone_no")}
          value={value.phone_no}
        />
      </div>
      <div className="btns">
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
};

export default Info;
