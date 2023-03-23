import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./BackdropOverlayModal.scss";

const Backdrop = () => {
  return <div className={"backdrop"} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={"backdropSmallContainer"}>
      <div className={"contentModal"}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("root");

const BackdropOverlaySmall = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default BackdropOverlaySmall;
