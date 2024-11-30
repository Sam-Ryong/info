import React from "react";
import "react-quill/dist/quill.snow.css";
import Home from "../Home/Home";
import Editor from "../Editor/Editor";
import PostList from "../PostList/PostList";
import PostDetail from "../PostDetail/PostDetail";
import sidebarData from "../hardData/Sidebar.json";

const ContentSelector = ({ name, setSelectedItem }) => {
  const categories = Object.entries(sidebarData)
    .filter(([key]) => key !== "Links") // "Links" 제외
    .flatMap(([, value]) => value.List.map((item) => item.name));

  if (name === "Home") {
    return <Home />;
  } else if (name == "Admin") {
    return <Editor />;
  } else if (categories.includes(name)) {
    return <PostList category={name} setSelectedItem={setSelectedItem} />;
  } else {
    return <PostDetail id={name} />;
  }
};

export default ContentSelector;
