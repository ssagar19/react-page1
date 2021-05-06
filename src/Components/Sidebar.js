import "../App.css";
import React from "react";
import { SidebarData } from "./SidebarData";

function Sidebar() {
  console.log(SidebarData);
  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        {SidebarData.map((val, key) => {
          return (
            <li className="row" key={key}>
              <div id="title">{val.title}</div>
              <div id="icon">{val.icon}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
