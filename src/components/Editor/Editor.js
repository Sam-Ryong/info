import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import "./Editor.css";
import sidebarData from "../hardData/Sidebar.json";

const Editor = () => {
  const [title, setTitle] = useState(""); // 게시글 제목 상태
  const [category, setCategory] = useState(""); // 카테고리 상태
  const [editorContent, setEditorContent] = useState(""); // 본문 상태
  const [message, setMessage] = useState(""); // 상태 메시지

  // "Links"를 제외한 카테고리 리스트 추출
  const categories = Object.entries(sidebarData)
    .filter(([key]) => key !== "Links") // "Links" 제외
    .flatMap(([, value]) => value.List.map((item) => item.name));

  // 에디터 변경 핸들러
  const handleEditorChange = (value) => {
    setEditorContent(value);
  };

  // 게시글 작성 요청 핸들러
  const handleSubmit = async () => {
    if (!title || !category || !editorContent) {
      setMessage("제목, 카테고리, 본문을 모두 입력해주세요.");
      return;
    }

    const postData = {
      title,
      category,
      content: editorContent,
      author: "홍삼룡", // 작성자 정보 (임시값)
      createdAt: new Date().toISOString(), // 현재 시간
    };

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_HOST}/posts`,
        postData
      );
      setMessage("게시글 작성 성공!");
      console.log("작성된 게시글:", response.data);
    } catch (error) {
      console.error("게시글 작성 실패:", error);
      setMessage("게시글 작성 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="editor-container">
      <h2>게시글 작성</h2>

      {/* 제목 입력 */}
      <div className="form-group">
        <label htmlFor="title">제목</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="게시글 제목을 입력하세요"
        />
      </div>

      {/* 카테고리 선택 */}
      <div className="form-group">
        <label htmlFor="category">카테고리</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">카테고리를 선택하세요</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* 본문 작성 */}
      <div className="form-group">
        <label htmlFor="content">본문</label>
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

      {/* 작성 버튼 */}
      <button className="submit-button" onClick={handleSubmit}>
        작성
      </button>

      {/* 상태 메시지 */}
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Editor;
