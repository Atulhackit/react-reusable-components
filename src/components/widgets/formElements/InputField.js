import React, { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import configuration from "../../../configuration.json";
import "./InputField.scss";

function InputField(props) {
  const {
    name,
    placeholder,
    type,
    autoComplete,
    state,
    label,
    required,
    disabled,
    inputType,
    className,
  } = props;

  const [value, setValue] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const handleChange = (e) => setValue(e.target.value);

  const onToggleAndFocus = (event) => {
    setPasswordShown(!passwordShown);
    const lengthOfInput = event.target.value.length;
    return event.target.setSelectionRange(lengthOfInput, lengthOfInput);
  };

  return (
    <div
      className={`inputContainer ${
        configuration?.global?.appearance?.formElementsStyle
      } ${className ? className : ""}`.trim()}
    >
      <div className="formControl">
        <input
          className={state === "error" ? "errorInput formInput" : "formInput"}
          name={name}
          type={
            inputType === "password"
              ? passwordShown
                ? "text"
                : "password"
              : type
          }
          value={value}
          placeholder={placeholder}
          autoComplete={autoComplete}
          onChange={handleChange}
          required
          disabled={disabled}
        />
        {inputType && (
          <span className={"passwordIcon"} onClick={onToggleAndFocus}>
            {passwordShown ? (
              <AiFillEye size={20} />
            ) : (
              <AiFillEyeInvisible size={20} />
            )}
          </span>
        )}
        {label && (
          <label
            className={state === "error" ? "formLabel errorMsg" : "formLabel"}
          >
            {label} {required && "*"}{" "}
          </label>
        )}
      </div>
      {state === "error" && <span className="errorMsg">Enter {name}</span>}
    </div>
  );
}

export default InputField;
