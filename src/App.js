import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Profile from "./components/Profile"; // 새 프로필 컴포넌트 추가
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="main-layout">
        <Sidebar />
        <Content />
        <Profile /> {/* 프로필 섹션 추가 */}
      </div>
    </div>
  );
};

export default App;
