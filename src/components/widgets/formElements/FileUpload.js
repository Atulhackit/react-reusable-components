import React ,{useRef, useState} from "react";
import "./FileUpload.scss";
import configuration from "../../../configuration.json";

function FileUpload ({
  type,
  nameAndId,
  styleType,
  disabled,
  multiple,
  accept,
  className
}){
  const [uploadedFile,setUploadedFile]=useState('')
  const inputValue= useRef(null)
  const handleChange=()=>{
    setUploadedFile(inputValue?.current?.value)
    console.log(inputValue?.current?.value)
  }
  return (
    <div
      className={`fileInput ${className} ${configuration?.global?.appearance?.fileUploadStyle}`}
    >
      <div className="dropZoneContainer">
      <div className= "dropZone">
        <p>Drag 'n' drop some files here <br/> or  </p>
        <button className="uploadBtn">Upload file</button>
      </div>
      <aside className="uploadedFile">
        <ul>{uploadedFile}</ul>
      </aside>
    </div>
       <div className="uploadFile">
        <input
          type={type}
          name={nameAndId}
          id={nameAndId}
          className="fileInputUpload"
          disabled={disabled ? true : false}
          multiple={multiple ? true : false}
          accept={accept}
          ref={inputValue}
          onChange={handleChange}
        />
       <div className="fileInputLabelContainer">
       <label className={`fileInputLabel ${styleType}`} htmlFor={nameAndId}>
          <span>Upload file</span>
        </label>
        <p>{uploadedFile}</p>
       </div>
      </div>
    </div>
  );
};

export default FileUpload;
