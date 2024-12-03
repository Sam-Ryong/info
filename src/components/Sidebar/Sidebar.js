import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { setInit } from "../../storage/store";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate
  const posts = useSelector((state) => state.posts || []);

  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    url: "",
    tag: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_HOST}/posts`
        );
        dispatch(setInit(response.data));
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  // 비밀번호 확인
  const handlePasswordSubmit = () => {
    if (password === "admin123") {
      setIsPasswordModalOpen(false);
      setIsFormModalOpen(true);
    } else {
      alert("비밀번호가 틀렸습니다.");
    }
  };

  // 폼 제출
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // URL 중복 여부 확인
    const existingPost = posts.find((post) => post.url === formData.url);

    try {
      if (existingPost) {
        // PUT 요청: 기존 게시물 업데이트
        const response = await axios.put(
          `${process.env.REACT_APP_API_HOST}/posts/${existingPost.id}`,
          formData
        );
        console.log("Post Updated:", response.data);
        alert("게시물이 성공적으로 업데이트되었습니다!");
      } else {
        // POST 요청: 새 게시물 생성
        const response = await axios.post(
          `${process.env.REACT_APP_API_HOST}/posts`,
          formData
        );
        console.log("Post Created:", response.data);
        alert("게시물이 성공적으로 등록되었습니다!");
      }

      setIsFormModalOpen(false);
    } catch (error) {
      console.error("Failed to submit post:", error);
      alert("게시물 등록에 실패했습니다.");
    }
  };

  // Navigate to post URL
  const handleNavigate = (url) => {
    if (url == "home") {
      navigate("/");
    } else {
      navigate(`/page/${url}`);
    }
  };

  return (
    <aside className="sidebar">
      <h2>메뉴</h2>
      <ul onClick={() => handleNavigate("home")}>홈으로</ul>
      <ul>
        {posts &&
          posts.map((post) => (
            <li key={post.id} onClick={() => handleNavigate(post.url)}>
              {post.title}
            </li>
          ))}
      </ul>
      <ul>
        <button onClick={() => setIsPasswordModalOpen(true)}>
          ADMIN SETTING
        </button>
      </ul>

      {/* 비밀번호 모달 */}
      {isPasswordModalOpen && (
        <div className="modal">
          <h3>비밀번호 입력</h3>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handlePasswordSubmit}>확인</button>
          <button onClick={() => setIsPasswordModalOpen(false)}>취소</button>
        </div>
      )}

      {/* 폼 모달 */}
      {isFormModalOpen && (
        <div className="modal">
          <h3>게시물 추가</h3>
          <form onSubmit={handleFormSubmit}>
            <div>
              <label>Title:</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label>URL:</label>
              <input
                type="text"
                value={formData.url}
                onChange={(e) =>
                  setFormData({ ...formData, url: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label>Tag:</label>
              <input
                type="text"
                value={formData.tag}
                onChange={(e) =>
                  setFormData({ ...formData, tag: e.target.value })
                }
              />
            </div>
            <button type="submit">제출</button>
            <button type="button" onClick={() => setIsFormModalOpen(false)}>
              취소
            </button>
          </form>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
