import React from "react";

const Ask = () => {
  return (
    <iframe
      src="https://sam-ryong.github.io/info/ask"
      title="My iframe"
      style={{
        width: "30%", // 너비 설정
        height: "30%", // 높이 설정
        border: "none", // 테두리 제거
        position: "absolute",
        left: "50%", // 수평 중심으로 이동
        transform: "translate(-50%, 0%)", // 가운데 정렬
      }}
    />
  );
};

export default Ask;
