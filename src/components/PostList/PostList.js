import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./PostList.module.css"; // CSS 모듈 import

const PostList = ({ category, setSelectedItem }) => {
  const [posts, setPosts] = useState([]); // 게시글 데이터 상태
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [error, setError] = useState(null); // 에러 상태

  // 데이터 가져오기
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true); // 로딩 시작
        const response = await axios.get(
          `${process.env.REACT_APP_API_HOST}/posts/category/${category}`
        );
        setPosts(response.data); // 게시글 데이터 설정
      } catch (err) {
        setError(err.message); // 에러 처리
      } finally {
        setLoading(false); // 로딩 종료
      }
    };

    fetchPosts();
  }, [category]);

  // 로딩 중일 때 표시
  if (loading) return <div className={styles.loading}>Loading...</div>;

  // 에러 발생 시 표시
  if (error) return <div className={styles.error}>Error: {error}</div>;

  // 게시글 목록 렌더링
  return (
    <div className={styles.postList}>
      <table className={styles.postTable}>
        <thead>
          <tr>
            <th>제목</th>
            <th>작성자</th>
            <th>날짜</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr
              key={post.id}
              onClick={() => setSelectedItem(post.id)} // 클릭 시 setSelectedItem 호출
              className={styles.postRow}
            >
              <td>{post.title}</td>
              <td>{post.author}</td>
              <td>{new Date(post.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostList;
