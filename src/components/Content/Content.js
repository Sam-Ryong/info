import React, { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
import "./Content.css";
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

import { NotionRenderer } from "react-notion";
import Sidebar from "../Sidebar/Sidebar";

const Content = () => {
  const [response, setResponse] = useState({});

  useEffect(() => {
    // 두번째 방법
    // const NOTION_PAGE_ID = "https-71174cdc26af4c4ab161bd52238355b9";
    // const NOTION_PAGE_ID = "14425f8894f5807eb704e854855a8dca";
    const NOTION_PAGE_ID = "14325f8894f5802781fad5f48485a258";
    fetch(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
      .then((res) => res.json())
      .then((resJson) => {
        setResponse(resJson);
      });
  }, []);
  return (
    <main className="content">
      <Sidebar></Sidebar>

      <div className="notion-dark-mode">
        <NotionRenderer
          // blockMap={staticResponse}
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
