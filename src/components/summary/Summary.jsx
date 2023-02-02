import React from "react";

import "./Summary.scss";
const Summary = ({ prev, value, handleChange }) => {
  return (
    <div className="summary">
      <label htmlFor="info">summary</label>

      <input
        type="text"
        // onChange={handleChange("summary")}
        // value={value.summary}
      />
      <div className="btns">
        <button onClick={prev}>prev</button>
      </div>
    </div>
  );
};

export default Summary;
