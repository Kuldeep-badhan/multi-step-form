import React from "react";

import "./Summary.scss";
const Summary = ({ prev, value, handleChange }) => {
  return (
    <div className="summary">
      <label htmlFor="info">summary</label>
      <p>{value.plan}</p>
      <p>{value.addon}</p>
      <div className="btns">
        <button onClick={prev}>prev</button>
      </div>
    </div>
  );
};

export default Summary;
