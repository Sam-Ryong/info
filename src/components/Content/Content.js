import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import "./Content.css";
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

import { NotionRenderer } from "react-notion";

const Content = () => {
  const { pageId } = useParams(); // URL에서 pageId 가져오기

  const [response, setResponse] = useState({});

  useEffect(() => {
    const NOTION_PAGE_ID = pageId;
    fetch(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
      .then((res) => res.json())
      .then((resJson) => {
        setResponse(resJson);
      });
  }, [pageId]);

  return (
    <main className="content">
      <div className="notion-dark-mode">
        <NotionRenderer
          blockMap={response} // content 렌더링
          fullPage={true}
          hideHeader={true}
          theme="dark"
        />
      </div>
    </main>
  );
};

export default Content;
