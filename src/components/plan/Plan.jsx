import React, { useEffect, useState } from "react";

import "./Plan.scss";

import arcade from "../../assets/images/icon-arcade.svg";
import advance from "../../assets/images/icon-advanced.svg";
import pro from "../../assets/images/icon-pro.svg";

const Plan = ({ prev, next, value, handleCheckbox }) => {
  const [selectedArcade, setSelectedArcade] = useState(false);
  const [selectedAdvance, setSelectedAdvance] = useState(false);
  const [selectedPro, setSelectedPro] = useState(false);
  useEffect(() => {
    if (value.plan === "Arcade") {
      setSelectedArcade(true);
    }
    if (value.plan === "Advance") {
      setSelectedAdvance(true);
    }
    if (value.plan === "Pro") {
      setSelectedPro(true);
    }
  }, []);

  return (
    <div className="plan__container">
      <h2>Select your plan</h2>
      <p>You have the option of monthly or yearly billing</p>
      <div className="plan__details">
        <div
          className={selectedArcade ? ` active plan` : ` plan `}
          onClick={() => {
            setSelectedArcade(() => {
              handleCheckbox("plan", "Arcade");
              handleCheckbox("price", 9);
              return true;
            });
            setSelectedAdvance(false);
            setSelectedPro(false);
          }}
        >
          <div className="plan__image">
            <img src={arcade} alt="arcade" />
          </div>
          <div className="plan__price">
            <span>arcade</span>
            <span>$9/mo</span>
          </div>
        </div>
        <div
          className={selectedAdvance ? ` active plan` : ` plan `}
          onClick={() => {
            setSelectedArcade(false);
            setSelectedAdvance(() => {
              handleCheckbox("plan", "Advance");
              handleCheckbox("price", 12);

              return true;
            });
            setSelectedPro(false);
          }}
        >
          <div className="plan__image">
            <img src={advance} alt="advance" />
          </div>
          <div className="plan__price">
            <span>advance</span>
            <span>$12/mo</span>
          </div>
        </div>
        <div
          className={selectedPro ? ` active plan` : ` plan `}
          onClick={() => {
            setSelectedArcade(false);
            setSelectedAdvance(false);
            setSelectedPro(() => {
              handleCheckbox("plan", "Pro");
              handleCheckbox("price", 15);
              return true;
            });
          }}
        >
          <div className="plan__image">
            <img src={pro} alt="pro" />
          </div>
          <div className="plan__price">
            <span>pro</span>
            <span>$15/mo</span>
          </div>
        </div>
      </div>
      <div className="plan__time-selection">
        <span>Monthly</span>
        <label htmlFor="checkbox" className="switch">
          <input
            type="checkbox"
            id="checkbox"
            defaultChecked={!value.monthly}
            onChange={() => {
              handleCheckbox("monthly", !value.monthly);
            }}
          />
          <span className="slider round"></span>
        </label>
        <span>Yearly</span>
      </div>

      <div className="btns">
        <button onClick={prev}>Prev</button>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
};

export default Plan;
