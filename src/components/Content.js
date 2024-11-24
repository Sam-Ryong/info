import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./Content.css";

const Content = ({ icon, selectedItem }) => {
  const [editorContent, setEditorContent] = useState("a");
  const handleEditorChange = (value) => {
    setEditorContent(value); // 에디터 내용 상태 업데이트
  };
  return (
    <main className="content">
      <h1>
        {icon} {selectedItem}
      </h1>
      {selectedItem != "Admin" ? (
        <p>준비중</p>
      ) : (
        <div className="editor-container">
          <h2>게시글 작성</h2>
          <ReactQuill
            value={editorContent}
            onChange={handleEditorChange}
            modules={{
              toolbar: [
                [{ header: "1" }, { header: "2" }, { font: [] }],
                [{ list: "ordered" }, { list: "bullet" }],
                ["bold", "italic", "underline"],
                ["link"],
                ["blockquote"],
                [{ align: [] }],
                ["image"],
                ["video"],
              ],
            }}
          />
        </div>
      )}
    </main>
  );
};

export default Content;
