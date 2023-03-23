import React, { useState } from "react";
import "./Video.scss";
import maximize from "../../../../src/assets/images/maps/maximize.svg";
import minimize from "../../../../src/assets/images/maps/minimize.svg";

const Video = ({ title, src, control, posters,showFullVideo,setShowFullVideo }) => {

  const handleOnclick = () => {
    setShowFullVideo(!showFullVideo);
  };
  return (
    <div className= "mainvideo-container">
        <div className="subvideo-container">
          <div className="videoplayer">
            <video
              poster={posters}
              controls={control ? true : false}
              width="80%"
              height="80%"
            >
              <source src={src} />
            </video>
            <div className="videotext">
              <div className="videotext-inner">
                <p>{title}</p>
                <button onClick={handleOnclick}>
                  <img class="img" src={maximize} width="20" height="20"></img>
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Video;
