import React from "react";

import "./Info.scss";
const Info = ({ next, value, handleChange }) => {
  return (
    <form className="info">
      <h2>Personal info</h2>
      <p>Please provide your name, email address, and phone number.</p>
      <div className="name">
        <label htmlFor="name">Name </label>
        <input
          type="text"
          onChange={handleChange("name")}
          value={value.name}
          required
        />
      </div>
      <div className="email">
        <label htmlFor="email">Email </label>
        <input
          type="email"
          onChange={handleChange("email")}
          value={value.email}
          required
        />
      </div>
      <div className="phone__no">
        <label htmlFor="phone">Enter your phone number:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          onChange={handleChange("phone")}
        />
      </div>
      <div className="btns">
        <button type="submit" onClick={next}>
          Next
        </button>
      </div>
    </form>
  );
};

export default Info;
