import React, { useEffect, useState } from "react";

import "./Summary.scss";
const Summary = ({ prev, value, handleChange }) => {
  console.log(value);
  const [addonPrice, setAddonPrice] = useState(0);
  const [monthly, setMonthly] = useState("");
  const totalPrice =
    addonPrice + (monthly === "Monthly" ? value.price : value.price * 12);
  console.log("addonPrice", addonPrice);
  console.log("price", value.price);
  console.log("yearly price", value.price * 12);
  useEffect(() => {
    if (value.addon.online_service) {
      setAddonPrice((prev) => prev + 1);
      console.log(addonPrice);
    }
    if (value.addon.customizable_profile) {
      setAddonPrice((prev) => prev + 2);
      console.log(addonPrice);
    }
    if (value.addon.large_storage) {
      setAddonPrice((prev) => prev + 2);
      console.log(addonPrice);
    }
    if (value.monthly) {
      setMonthly("Monthly");
      console.log("monthly if");
    } else {
      setMonthly("Yearly");
      setAddonPrice((prev) => prev * 12);
    }
  }, []);

  return (
    <div className="summary">
      <h2>Finishing up</h2>
      <p>Double-check everything looks Ok before confirming</p>

      <div className="summary__details">
        <div className="summary__plan">
          <div className="summary__plan--name">
            {value.plan} ({monthly})
            <a
              href="#"
              onClick={() => {
                prev();
                prev();
              }}
            >
              Change
            </a>
          </div>
          <span className="summary__price">
            ${monthly ? value.price : value.price * 12}/mo
          </span>
        </div>
        <hr />
        {value.addon.online_service && (
          <div className="summary__plan">
            <div className="summary__plan--name">
              Online Service ({monthly})
            </div>
            <span className="summary__price">$1/mo</span>
          </div>
        )}
        {value.addon.large_storage && (
          <div className="summary__plan">
            <div className="summary__plan--name">Local Storage ({monthly})</div>
            <span className="summary__price">$2/mo</span>
          </div>
        )}

        {value.addon.customizable_profile && (
          <div className="summary__plan">
            <div className="summary__plan--name">
              Customize Profile ({monthly})
            </div>
            <span className="summary__price">$2/mo</span>
          </div>
        )}
      </div>
      <div className="total__bill">
        <p>Total (per {monthly})</p>
        <span className="total__price">${totalPrice}/mo</span>
      </div>
      <div className="btns">
        <button onClick={prev}>prev</button>
        <button>Confirm</button>
      </div>
    </div>
  );
};

export default Summary;
