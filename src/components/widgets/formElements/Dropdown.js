import React from "react";
import configuration from "../../../configuration.json";
import "./InputField.scss";

function Select({
  label,
  required,
  state,
  name,
  selectOption,
  selectValues,
  handleChange,
  className,
}) {
  return (
    <div
      className={`inputContainer ${
        configuration?.global?.appearance?.formElementsStyle
      } ${className ? className : ""}`.trim()}
    >
      <div className="formControl">
        <select
          id="selectValues"
          className={state === "error" ? "errorInput formInput" : "formInput"}
          // className="form-select"
          value={selectValues}
          onChange={handleChange}
          required
        >
          <option value="" disabled hidden></option>
          {selectOption.map((item, i) => {
            return (
              <option key={item?.id} value={item?.value}>
                {item?.value}
              </option>
            );
          })}
        </select>
        {label && (
          <label
            className={state === "error" ? "formLabel errorMsg" : "formLabel"}
          >
            {label} {required && "*"}{" "}
          </label>
        )}
        {state === "error" && <span className="errorMsg">{name}</span>}
      </div>
    </div>
  );
}
export default Select;
