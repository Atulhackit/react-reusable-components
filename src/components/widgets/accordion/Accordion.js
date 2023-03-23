import React, { useRef, useState } from "react";
import "./Accordion.scss"
import configuration from "../../../configuration.json";

const Accordion = ({accordionData}) => {
  const [showContent, setshowContent] = useState(false);
  const [id, setId] = useState(null);
  const [height,setHeight]=useState('0px')
  const content=useRef(null)
  const handleAccordion = (e, labelId) => {
    setshowContent(!showContent);
    setId(labelId);
    e.preventDefault();
    e.stopPropagation();
    setHeight(showContent? "0px": content?.current?.scrollHeight)
  };
  return (
    <div className={`accordionContainer ${configuration?.global?.appearance?.accordionStyle}`} >
      {accordionData.map((item, i) => {
        return (
          <section className="accordionMain" key={i}>
            <div
              onClick={(e) => handleAccordion(e, item?.id)}
              className={`accordionLabel ${showContent && id === item?.id && 'active'}`}
            >
              <p>
                {item?.label}
              </p>
              <span>{showContent && id === item?.id ? "-" : "+"} </span>
            </div>
            {showContent && id === item?.id && (
              <div
              ref={content}
              style={{ maxHeight: `${height}` }}
                className={`accordioncontent`}
              >
                <p>{item.content}</p>
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
};

export default Accordion;
