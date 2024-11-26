import React from "react";
import "react-quill/dist/quill.snow.css";
import "./Content.css";
import Home from "../Home/Home";
import Editor from "../Editor/Editor";

const Content = ({ icon, selectedItem }) => {
  return (
    <main className="content">
      <h1>
        {icon} {selectedItem}
      </h1>
      {selectedItem == "Home" ? <Home /> : <Editor />}
    </main>
  );
};

export default Content;
