import React, { useState } from "react";
import "./AdminAccess.css"; // 모달 스타일 추가

const AdminAccess = ({ isOpen, onClose, onPasswordSubmit }) => {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = () => {
    const correctPassword = "hsp0509"; // 실제 비밀번호를 여기에 설정하세요
    if (password === correctPassword) {
      onPasswordSubmit();
      onClose();
    } else {
      setErrorMessage("비밀번호가 틀렸습니다.");
    }
  };

  return (
    isOpen && (
      <div className="modal-overlay">
        <div className="modal-content">
          <h2>비밀번호 입력</h2>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="비밀번호를 입력하세요"
          />
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button onClick={handleSubmit}>확인</button>
          <button onClick={onClose}>취소</button>
        </div>
      </div>
    )
  );
};

export default AdminAccess;
