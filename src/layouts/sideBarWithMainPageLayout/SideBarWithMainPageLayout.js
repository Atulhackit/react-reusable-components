import React, { cloneElement, useState } from "react";
import { motion } from "framer-motion";
import "./SideBarWithMainPageLayout.scss";
const SideBarWithMainPageLayout = (props) => {
  const [showFullMap, setShowFullMap] = useState(true);
  const [LasyDashBoardFilter,Map, SideBar] = props.children;
  return (
    <main className="mainPageLayout">  
      <section
        className={showFullMap ? "container" : "container containerFullScreen"}
      >
        {cloneElement(LasyDashBoardFilter, {
            showFullMap: showFullMap,
            setShowFullMap: setShowFullMap,
          })}
        <div className={"map"}>
          {cloneElement(Map, {
            showFullMap: showFullMap,
          })}
        </div>
       <motion.div
          animate={{ opacity: !showFullMap ? 0 : 1 }}
          transition={{ duration: !showFullMap ? 0 : 0.5 }}
          className={"sidebar"}
        >
          {SideBar}
        </motion.div> 
      </section>
    </main>
  );
};

export default SideBarWithMainPageLayout;
