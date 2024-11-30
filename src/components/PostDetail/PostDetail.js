import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./PostDetail.module.css"; // CSS 모듈 import

const PostDetail = ({ id }) => {
  const [post, setPost] = useState(null); // 게시글 데이터 상태
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [error, setError] = useState(null); // 에러 상태

  // 데이터 가져오기
  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true); // 로딩 시작
        const response = await axios.get(
          `${process.env.REACT_APP_API_HOST}/posts/${id}`
        );
        setPost(response.data); // 게시글 데이터 설정
      } catch (err) {
        setError(err.message); // 에러 처리
      } finally {
        setLoading(false); // 로딩 종료
      }
    };

    fetchPost();
  }, [id]);

  // 로딩 중일 때 표시
  if (loading) return <div className={styles.loading}>Loading...</div>;

  // 에러 발생 시 표시
  if (error) return <div className={styles.error}>Error: {error}</div>;

  // 게시글 데이터가 없을 때
  if (!post) return <div className={styles.error}>Post not found.</div>;

  // 게시글 상세 렌더링
  return (
    <div className={styles.postDetail}>
      <h1>{post.title}</h1>
      <p>
        <strong>작성자:</strong> {post.author}
      </p>
      <p>
        <strong>작성일:</strong> {new Date(post.createdAt).toLocaleString()}
      </p>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post.content }} // HTML 컨텐츠 렌더링
      />
    </div>
  );
};

export default PostDetail;
