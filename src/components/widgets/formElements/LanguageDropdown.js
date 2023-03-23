import React from "react";
import configuration from "../../../configuration.json";
import "./InputField.scss";

function LanguageDropDown({
  label,
  required,
  state,
  name,
  id,
  className,
}) {
  return (
    <div
      className={`inputContainer ${
        configuration?.global?.appearance?.formElementsStyle
      } ${className ? className : ""}`.trim()}
    >
      <div className="formControl">
        <div id={id} className={state === "error" ? "errorInput formInput" : "formInput"} >
        </div>
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
export default LanguageDropDown;
