import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

function ProfileMarkDown() {
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    // public 폴더에서 마크다운 파일 가져오기
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/Sam-Ryong/Sam-Ryong/refs/heads/main/README.md"
        );
        if (response.ok) {
          const data = await response.text();
          setMarkdownContent(data); // 마크다운 파일 내용 저장
        } else {
          console.error("Failed to fetch markdown:", response.statusText);
        }
      } catch (error) {
        console.error("Failed to fetch markdown:", error);
      }
    };

    fetchMarkdown(); // 컴포넌트가 마운트될 때 마크다운 파일을 가져옴
  }, []);

  return (
    <div>
      {markdownContent ? (
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      ) : (
        <p>파일을 로딩 중...</p>
      )}
    </div>
  );
}

export default ProfileMarkDown;
