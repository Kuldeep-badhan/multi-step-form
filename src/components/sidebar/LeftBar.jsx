import React from "react";

import "./LeftBar.scss";
const LeftBar = ({ step }) => {
  return (
    <div className="left__bar">
      <div className="step">
        <button
          className={step === 1 ? "active left__bar--btn" : "left__bar--btn"}
        >
          {" "}
          1
        </button>
        <div className="step__right">
          <span className="step__right--text">STEP 1</span>
          <strong>YOUR INFO </strong>
        </div>
      </div>
      <div className="step">
        <button
          className={step === 2 ? "active left__bar--btn" : "left__bar--btn"}
        >
          {" "}
          2
        </button>
        <div className="step__right">
          <span className="step__right--text">STEP 2</span>
          <strong>SELECT PLAN</strong>
        </div>
      </div>
      <div className="step">
        <button
          className={step === 3 ? "active left__bar--btn" : "left__bar--btn"}
        >
          {" "}
          3
        </button>
        <div className="step__right">
          <span className="step__right--text">STEP 3</span>
          <strong>ADD-ON </strong>
        </div>
      </div>
      <div className="step">
        <button
          className={step === 4 ? "active left__bar--btn" : "left__bar--btn"}
        >
          {" "}
          4
        </button>
        <div className="step__right">
          <span className="step__right--text">STEP 4</span>
          <strong>SUMMARY </strong>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
