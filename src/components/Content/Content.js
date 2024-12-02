import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import "./Content.css";
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

import { NotionRenderer } from "react-notion";

const Content = () => {
  const { pageId } = useParams(); // URL에서 pageId 가져오기
  const [response, setResponse] = useState(null); // 초기값 null
  const [loading, setLoading] = useState(true); // 로딩 상태 추가

  useEffect(() => {
    if (pageId) {
      setLoading(true); // 데이터 로드 시작
      fetch(`https://notion-api.splitbee.io/v1/page/${pageId}`)
        .then((res) => res.json())
        .then((resJson) => {
          setResponse(resJson);
        })
        .catch((err) => console.error("Failed to fetch Notion data:", err))
        .finally(() => setLoading(false)); // 로딩 완료
    }
  }, [pageId]);

  if (loading) {
    return <div className="loading">Loading...</div>; // 로딩 표시
  }

  if (!response) {
    return <div className="error">Failed to load content.</div>; // 에러 상태 처리
  }

  return (
    <main className="content">
      <div className="notion-dark-mode">
        <NotionRenderer
          blockMap={response}
          fullPage={true}
          hideHeader={true}
          theme="dark"
        />
      </div>
    </main>
  );
};

export default Content;
