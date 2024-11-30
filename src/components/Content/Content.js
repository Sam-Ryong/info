import React from "react";
import "react-quill/dist/quill.snow.css";
import "./Content.css";
import ContentSelector from "../ContentSelector/ContentSelector";

const Content = ({ icon, selectedItem, setSelectedItem }) => {
  return (
    <main className="content">
      <h1>
        {icon} {selectedItem}
      </h1>
      <ContentSelector name={selectedItem} setSelectedItem={setSelectedItem} />
    </main>
  );
};

export default Content;
