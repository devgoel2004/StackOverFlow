import React from "react";
import "./RightSidebar.css";
import Widget from "./Widget";
import WidgetTags from "./WidgetTags";
const RightSidebar = () => {
  const now = new Date();
  const hours = 10;
  return (
    <div>
      <aside
        className={
          hours >= 18 || hours <= 5
            ? `right-sidebar-dark`
            : `right-sidebar responsive`
        }>
        <Widget />
        <WidgetTags />
      </aside>
    </div>
  );
};

export default RightSidebar;
