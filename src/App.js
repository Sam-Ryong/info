import React, { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import "./App.css";
import sidebarData from "./components/hardData/Sidebar.json";
import { FaHome } from "react-icons/fa";

const App = () => {
  const [selectedItem, setSelectedItem] = useState("Home"); // 선택된 항목 상태 관리
  const [selectedIcon, setSelectedIcon] = useState(FaHome);

  // 클릭한 항목의 데이터를 Content로 전달
  const handleItemClick = (icon, itemName) => {
    if (itemName === "Github") {
      window.open("https://github.com/Sam-Ryong", "_blank"); // 새 탭에서 GitHub URL 열기
      return;
    }
    setSelectedIcon(icon);
    setSelectedItem(itemName); // 클릭한 항목의 이름을 상태로 저장
  };

  return (
    <div className="app">
      <Header />
      <div className="main-layout">
        <Sidebar onItemClick={handleItemClick} sidebarData={sidebarData} />
        <Content
          selectedItem={selectedItem}
          icon={selectedIcon}
          setSelectedItem={setSelectedItem}
        />
      </div>
    </div>
  );
};

export default App;
