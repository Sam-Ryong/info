// import "react-quill/dist/quill.snow.css";
// import Profile from "../Profile/Profile";
// import "./Home.css";

// const Home = () => {
//   return (
//     <div>
//       <div className="profile-container">
//         <Profile />
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
import "./Home.css";
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

import { NotionRenderer } from "react-notion";

const Content = () => {
  const [response, setResponse] = useState({});

  useEffect(() => {
    const NOTION_PAGE_ID = "26eb3f0d090a4983aea11f1694fed856";
    fetch(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
      .then((res) => res.json())
      .then((resJson) => {
        setResponse(resJson);
      });
  }, []);

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
