import React from "react";

import "./Plan.scss";
const Plan = ({ prev, next, value, handleChange }) => {
  return (
    <div className="plan">
      <label htmlFor="plan">plan</label>

      <input type="text" onChange={handleChange("plan")} value={value.plan} />
      <div className="btns">
        <button onClick={prev}>prev</button>
        <button onClick={next}>next</button>
      </div>
    </div>
  );
};

export default Plan;
