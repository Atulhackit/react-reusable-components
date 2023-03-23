import React from "react";
import configuration from "../../configuration.json";
import "./LoginLayout.scss";
import CopyRights from "../../components/global/footer/copyRights/CopyRights";

const LoginLayout = (props) => {
  const styleName = configuration?.login?.appearance?.pageStyle;
  const backgroundType = configuration?.login?.appearance?.backgroundType;
  return (
    <div className={`loginContainer ${backgroundType} ${styleName} `}>
      {configuration?.login?.title && (
        <div className={"logoTitle"}>
          <p>{configuration?.login?.title}</p>
        </div>
      )}
      <div className={"loginCard"}>{props.children}</div>
      {configuration?.login?.showCopyRights && (
        <div className="loginFooter">
          <div className="loginFotterWrap">
            <CopyRights />
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginLayout;
