import React from "react";
import "./Button.scss";
import configuration from "../../../configuration.json";
function Button({ content, disabled, className, onClick, type,url }) {
  
  return (
     <button
      className={`${url && content ? "iconButton buttonWrapper":(className = url? "iconButton" :"buttonWrapper")} ${
        configuration?.global?.appearance?.buttonStyle
      }
       ${type} ${className ? className : ""}`.trim()}
      disabled={disabled ? true : false}
      onClick={onClick}
    >
      {url && <img src={url} alt="icon"/>}
      {content}
    </button>
  );
}

export default Button;
