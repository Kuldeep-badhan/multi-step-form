import React from "react";

import "./AddOn.scss";
const AddOn = ({ prev, next, value, handleChange }) => {
  return (
    <div className="addon">
      <label htmlFor="addon">addon</label>

      <input type="text" onChange={handleChange("addon")} value={value.addon} />
      <div className="btns">
        <button onClick={prev}>prev</button>
        <button onClick={next}>next</button>
      </div>
    </div>
  );
};

export default AddOn;
