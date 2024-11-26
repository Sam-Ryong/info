import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./Editor.css";

const Content = () => {
  const [editorContent, setEditorContent] = useState("a");
  const handleEditorChange = (value) => {
    setEditorContent(value); // 에디터 내용 상태 업데이트
  };
  return (
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
  );
};

export default Content;
