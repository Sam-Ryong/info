import React from "react";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import "./App.css";

const App = () => {
  return (
    <div>
      <div className="app">
        <Header />
        <div className="main-layout">
          <Content />
        </div>
      </div>
    </div>
  );
};

export default App;
