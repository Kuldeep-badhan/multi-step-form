import React from "react";

import "./LeftBar.scss";
const LeftBar = () => {
  return (
    <div className="left__bar">
      <div className="step">
        <button className="left__bar--btn"> 1</button>
        <div className="step__right">
          <span className="step__right--text">STEP1</span>
          <strong>YOUR INFO </strong>
        </div>
      </div>
      <div className="step">
        <button className="left__bar--btn"> 2</button>
        <div className="step__right">
          <span className="step__right--text">STEP1</span>
          <strong>YOUR INFO </strong>
        </div>
      </div>
      <div className="step">
        <button className="left__bar--btn"> 3</button>
        <div className="step__right">
          <span className="step__right--text">STEP1</span>
          <strong>YOUR INFO </strong>
        </div>
      </div>
      <div className="step">
        <button className="left__bar--btn"> 4</button>
        <div className="step__right">
          <span className="step__right--text">STEP1</span>
          <strong>YOUR INFO </strong>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
