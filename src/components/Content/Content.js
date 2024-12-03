import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import "./Content.css";
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import { useSelector } from "react-redux";

import { NotionRenderer } from "react-notion";

const Content = () => {
  const { pageId } = useParams(); // URL에서 pageId 가져오기
  const posts = useSelector((state) => state.posts || []); // Redux에서 posts 가져오기

  // posts에서 해당하는 객체 찾기
  const currentPost = posts.find((post) => post.url === pageId);

  if (!currentPost) {
    return <div className="error">Content not found.</div>; // pageId에 해당하는 데이터가 없을 때
  }

  return (
    <main className="content">
      <div className="notion-dark-mode">
        <NotionRenderer
          blockMap={currentPost.content} // content 렌더링
          fullPage={true}
          hideHeader={true}
          theme="dark"
        />
      </div>
    </main>
  );
};

export default Content;
