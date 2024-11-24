import React from "react";
import sidebarData from "../hardData/Sidebar.json";
import "./Sidebar.css";
import {
  FaLink,
  FaHome,
  FaGithub,
  FaBook,
  FaServer,
  FaCloud,
  FaTools,
  FaMotorcycle,
  FaBusinessTime,
  FaLeaf,
  FaShoePrints,
} from "react-icons/fa";

const icons = {
  FaLink,
  FaHome,
  FaGithub,
  FaBook,
  FaServer,
  FaCloud,
  FaTools,
  FaMotorcycle,
  FaBusinessTime,
  FaLeaf,
  FaShoePrints,
};

const Sidebar = () => {
  return (
    <aside className="sidebar">
      {Object.entries(sidebarData).map(([section, data]) => (
        <React.Fragment key={section}>
          <h2>
            {React.createElement(icons[data.icon])} {section}
          </h2>
          <ul>
            {data.List.map((item, index) => (
              <li key={index}>
                {React.createElement(icons[item.icon])} {item.name}
              </li>
            ))}
          </ul>
          <hr />
        </React.Fragment>
      ))}
    </aside>
  );
};

export default Sidebar;
