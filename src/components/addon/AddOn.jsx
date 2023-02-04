import React from "react";

import "./AddOn.scss";
const AddOn = ({ prev, next, value, handleCheckbox }) => {
  return (
    <div className="addon">
      <h2>Pick add-ads</h2>
      <p>Add-ons help enhance your gaming experience</p>
      <div className="addon__options">
        <div className="addon__option">
          <input
            defaultChecked={value.addon.online_service}
            type="checkbox"
            name="online-service"
            id="online__service"
            onChange={() => {
              handleCheckbox("addon", {
                ...value.addon,
                online_service: !value.addon.online_service,
              });
            }}
          />
          <div className="addon__details">
            <div className="service">
              <label htmlFor="online-service">Online Service</label>
              <p>Access to multiplayer games</p>
            </div>
            <span className="addon__price">+1/mo</span>
          </div>
        </div>
        <div className="addon__option">
          <input
            defaultChecked={value.addon.large_storage}
            type="checkbox"
            name="large-storage"
            id="large__storage"
            onChange={() => {
              handleCheckbox("addon", {
                ...value.addon,
                large_storage: !value.addon.large_storage,
              });
            }}
          />
          <div className="addon__details">
            <div className="service">
              <label htmlFor="large-storage">Large Storage</label>
              <p>Extra 1TB of cloud save</p>
            </div>
            <span className="addon__price">+2/mo</span>
          </div>
        </div>
        <div className="addon__option">
          <input
            defaultChecked={value.addon.customizable_profile}
            type="checkbox"
            name="customizable-profile"
            id="customizable__profile"
            onChange={() => {
              handleCheckbox("addon", {
                ...value.addon,
                customizable_profile: !value.addon.customizable_profile,
              });
            }}
          />
          <div className="addon__details">
            <div className="service">
              <label htmlFor="customizable-profile">Customizable Profile</label>
              <p>Custom theme on your profile</p>
            </div>
            <span className="addon__price">+2/mo</span>
          </div>
        </div>
      </div>
      <div className="btns">
        <button onClick={prev}>prev</button>
        <button onClick={next}>next</button>
      </div>
    </div>
  );
};

export default AddOn;
