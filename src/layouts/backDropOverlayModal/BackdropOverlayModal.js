import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./BackdropOverlayModal.scss";
import closeBtn from "../../assets/images/icons/closebtn.svg";
const Backdrop = () => {
  return <div className={"backdrop"} />;
};

const ModalOverlay = ({ onClick }, props) => {
  return (
    <div className={"backdropContainer"}>
      <div className={"contentModal"}>
        {props.children}
        <header className="backdropHeader">
          <img src={closeBtn} alt="close" onClick={onClick} />
        </header>
      </div>
    </div>
  );
};

const portalElement = document.getElementById("root");

const BackdropOverlayModal = ({ onClick }, props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay onClick={onClick}>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default BackdropOverlayModal;
