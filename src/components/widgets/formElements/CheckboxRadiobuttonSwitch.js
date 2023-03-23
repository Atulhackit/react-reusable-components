import React from "react";
import "./CheckboxRadiobuttonSwitch.scss";

const CheckboxRadiobuttonSwitch = ({
  type,
  disabled,
  label,
  id,
  className,
  value,
  name,
  onChange,
  checked,
}) => {
  return (
    <div className={`checkBoxRadioButtonSwitchContainer`}>
      <input
        id={id}
        type={type === "" ? "checkbox" : type}
        disabled={disabled ? true : false}
        className={className === "" ? "checkbox" : className}
        name={name}
        onChange={onChange}
        value={value}
        checked={checked}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default CheckboxRadiobuttonSwitch;
