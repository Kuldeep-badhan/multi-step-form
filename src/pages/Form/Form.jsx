import React, { useState } from "react";

// local imports
import Info from "../../components/info/Info";
import Plan from "../../components/plan/Plan";
import AddOn from "../../components/addon/AddOn";
import LeftBar from "../../components/sidebar/LeftBar";
import Summary from "../../components/summary/Summary";

import "./Form.scss";
const Form = () => {
  const [form, setForm] = useState({
    step: 1,
    name: "",
    email: "",
    password: "",
    plan: "",
    addon: "",
  });

  const { step } = form;
  const { name, email, password, plan, addon } = form;
  const value = { name, email, password, plan, addon };
  const nextStep = () => {
    setForm((prev) => {
      return { ...prev, step: prev.step + 1 };
    });
  };
  const prevStep = () => {
    setForm((prev) => {
      return { ...prev, step: prev.step - 1 };
    });
  };
  const handleInput = (input) => (e) => {
    setForm((prev) => {
      return {
        ...prev,
        [input]: e.target.value,
      };
    });
  };

  switch (step) {
    case 1:
      return <Info next={nextStep} value={value} handleChange={handleInput} />;
    case 2:
      return (
        <Plan
          prev={prevStep}
          next={nextStep}
          value={value}
          handleChange={handleInput}
        />
      );
    case 3:
      return (
        <AddOn
          prev={prevStep}
          next={nextStep}
          value={value}
          handleChange={handleInput}
        />
      );
    case 4:
      return (
        <Summary prev={prevStep} value={value} handleChange={handleInput} />
      );
  }
};

export default Form;
