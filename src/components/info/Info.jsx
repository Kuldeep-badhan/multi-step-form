import React from "react";

import "./Info.scss";
const Info = ({ next, value, handleChange }) => {
  return (
    <div className="info">
      <div className="name">
        <label htmlFor="name">name</label>
        <input type="text" onChange={handleChange("name")} value={value.name} />
      </div>
      <div className="name">
        <label htmlFor="email">email</label>
        <input
          type="email"
          onChange={handleChange("email")}
          value={value.email}
        />
      </div>
      <div className="name">
        <label htmlFor="password">password</label>
        <input
          type="text"
          onChange={handleChange("password")}
          value={value.password}
        />
      </div>
      <div className="btns">
        <button onClick={next}>next</button>
      </div>
    </div>
  );
};

export default Info;
