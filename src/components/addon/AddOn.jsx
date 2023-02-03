import React from "react";

import "./AddOn.scss";
const AddOn = ({ prev, next, value, handleChange }) => {
  return (
    <div className="addon">
      <h2>Pick add-ads</h2>
      <p>Add-ons help enhance your gaming experience</p>
      <div className="online__service">
        <label htmlFor="online-service">Online Service</label>
        <input type="checkbox" name="online-service" id="online__service" />
      </div>
      <div className="large__storage">
        <label htmlFor="large-storage">Large Storage</label>
        <input type="checkbox" name="large-storage" id="large__storage" />
      </div>
      <div className="customizable__profile">
        <label htmlFor="customizable-profile">Customizable Profile</label>
        <input
          type="checkbox"
          name="customizable-profile"
          id="customizable__profile"
        />
      </div>
      <div className="btns">
        <button onClick={prev}>prev</button>
        <button onClick={next}>next</button>
      </div>
    </div>
  );
};

export default AddOn;
