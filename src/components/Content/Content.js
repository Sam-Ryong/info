import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // useParams import
import "react-quill/dist/quill.snow.css";
import "./Content.css";
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

import { NotionRenderer } from "react-notion";

const Content = () => {
  const { pageId } = useParams(); // URL에서 pageId 가져오기
  const [response, setResponse] = useState({});

  useEffect(() => {
    if (pageId) {
      fetch(`https://notion-api.splitbee.io/v1/page/${pageId}`)
        .then((res) => res.json())
        .then((resJson) => {
          setResponse(resJson);
        })
        .catch((err) => console.error("Failed to fetch Notion data:", err));
    }
  }, [pageId]);

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
