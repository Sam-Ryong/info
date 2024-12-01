import React from "react";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <div>
      <div className="app">
        <Header />

        <div className="main-layout">
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Sidebar />
            <Routes>
              <Route path="/" element={<Home />} />
              {/* Content 컴포넌트에서 pageId를 URL로 전달 */}
              <Route path="/page/:pageId" element={<Content />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
};

export default App;
