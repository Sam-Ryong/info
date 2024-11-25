import React from "react";

const Ask = () => {
  return (
    <iframe
      src="https://sam-ryong.github.io/info/ask"
      title="My iframe"
      style={{
        width: "150%", // 원하는 너비 설정
        height: "30%", // 고정 높이 설정
        border: "none", // 테두리 제거
        maxWidth: "500px",
      }}
    />
  );
};

export default Ask;
