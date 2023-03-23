import React, { Fragment } from "react";
import "./baseLayout.scss";
import configuration from "../../configuration.json";

const BaseLayout = (props) => {
  const [Header, PageLayout, Footer] = props.children;
  return (
    <Fragment>
      <section className={`${(configuration?.global?.header?.show === true && configuration?.global?.footer?.show === true) ?  "baseLayoutContainer full" : "baseLayoutContainer"}  ${(configuration?.global?.header?.show === true && configuration?.global?.footer?.show === false)? "onlyHeader" : "" }`}>
        {configuration?.global?.header?.show && Header}
        {PageLayout}
        {configuration?.global?.footer?.show && Footer}
      </section>
    </Fragment>
  );
};

export default BaseLayout;
