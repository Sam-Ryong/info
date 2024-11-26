import React, { useState } from "react";
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
import AdminAccess from "../AdminAccess/AdminAccess";

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
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAdminClick = () => {
    setModalOpen(true); // 모달 열기
    console.log("MOAD");
  };

  const handlePasswordSubmit = () => {
    onItemClick(FaGear, "Admin"); // 비밀번호가 맞으면 실행
  };

  const closeModal = () => {
    setModalOpen(false); // 모달 닫기
  };
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
        <li onClick={() => handleAdminClick()}>
          <FaGear /> Admin
        </li>
      </ul>
      <AdminAccess
        isOpen={isModalOpen}
        onClose={closeModal}
        onPasswordSubmit={handlePasswordSubmit}
      />
    </aside>
  );
};

export default Sidebar;
