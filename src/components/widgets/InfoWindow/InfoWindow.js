import React from "react";
import "./InfoWindow.scss";
import { Button } from "../WidgetsIndex";
import BackdropOverlaySmall from "../../../layouts/backDropOverlayModal/BackdropOverlaySmall";
import closeBtn from "../../../assets/images/icons/closebtn.svg";
import configuration from "../../../configuration.json";
const InfoWindow = ({ onClick }) => {
  return (
    <BackdropOverlaySmall>
      <div
        className={`infoWindowContainer ${configuration?.global?.appearance?.infoWindowStyle}`}
      >
        <div className="infoContentModel">
          <header className="infoHeader">
            <img src={closeBtn} alt="close" onClick={onClick} />
          </header>
          <section className="infoBody">
            <div className="content">
              <p> Are You Sure Want to Delete this file ?</p>
            </div>
            <div className="infoButtons">
              <Button content={"yes"} type="primary small" />
              <Button content={"Cancel"} type="secondary small" onClick={onClick} />
            </div>
          </section>
        </div>
      </div>
    </BackdropOverlaySmall>
  );
};

export default InfoWindow;
