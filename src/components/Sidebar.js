import React from "react";
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
import { FaGear } from "react-icons/fa6";

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

const Sidebar = ({ onItemClick, sidebarData }) => {
  return (
    <aside className="sidebar">
      {Object.entries(sidebarData).map(([section, data]) => (
        <React.Fragment key={section}>
          <h2>
            {React.createElement(icons[data.icon])} {section}
          </h2>
          <ul>
            {data.List.map((item, index) => (
              <li
                key={index}
                onClick={() => onItemClick(icons[item.icon], item.name)}
              >
                {React.createElement(icons[item.icon])} {item.name}
              </li>
            ))}
          </ul>
          <hr />
        </React.Fragment>
      ))}
      <ul>
        <li onClick={() => onItemClick(FaGear, "Admin")}>
          <FaGear /> Admin
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
