import React from "react";
import "./Tab.scss";
import configuration from "../../../configuration.json";

const Tab = ({ tabData, activeTab, onClick }) => {
  return (
    <ul
      className={`tabsWrapper ${configuration?.global?.appearance?.tabStyle}`}
    >
      {tabData.map((selectedTab) => {
        return (
          <li
            key={selectedTab.id}
            className={activeTab.id === selectedTab.id ? "item active" : "item"}
            onClick={() => onClick(selectedTab)}
          >
            {selectedTab.name}
          </li>
        );
      })}
    </ul>
  );
};

export default Tab;
