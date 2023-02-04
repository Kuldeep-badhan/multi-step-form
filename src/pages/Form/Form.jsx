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
    phone: "",
    plan: "",
    addon: {
      online_service: false,
      large_storage: false,
      customizable_profile: false,
    },
    price: 0,
    monthly: true,
  });

  const { step } = form;
  const { name, email, phone, plan, addon, price, monthly } = form;
  const value = { name, email, phone, plan, addon, price, monthly };
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
  const handleCheckbox = (stateName, stateValue) => {
    setForm((prev) => {
      return {
        ...prev,
        [stateName]: stateValue,
      };
    });
  };
  switch (step) {
    case 1:
      return (
        <>
          <LeftBar step={step} />
          <Info next={nextStep} value={value} handleChange={handleInput} />
        </>
      );
    case 2:
      return (
        <>
          <LeftBar step={step} />
          <Plan
            prev={prevStep}
            next={nextStep}
            value={value}
            handleCheckbox={handleCheckbox}
          />
        </>
      );
    case 3:
      return (
        <>
          <LeftBar step={step} />

          <AddOn
            prev={prevStep}
            next={nextStep}
            value={value}
            handleCheckbox={handleCheckbox}
          />
        </>
      );
    case 4:
      return (
        <>
          <LeftBar step={step} />

          <Summary prev={prevStep} value={value} handleChange={handleInput} />
        </>
      );
  }
};

export default Form;
