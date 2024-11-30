import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Header.css";
import Social from "../Social";
import Container from "../Container";
import H1 from "../H1";
import P from "../P";
import Ask from "../Ask/Ask";

const Header = () => {
  const [visitorCount, setVisitorCount] = useState({ today: 0, total: 0 });
  useEffect(() => {
    // Fetch visitor count
    const fetchVisitorCount = async () => {
      try {
        axios.defaults.withCredentials = true;
        const response = await axios.get(
          `${process.env.REACT_APP_API_HOST}/visit`,
          { withCredentials: true }
        );
        setVisitorCount(response.data);
      } catch (error) {
        console.error("Failed to fetch visitor count:", error);
      }
    };

    fetchVisitorCount();
  }, []);

  return (
    <header className="header">
      <Container>
        <div className="visitor-count">
          <span>
            Today: {visitorCount.today} <br></br>
            Total: {visitorCount.total}
          </span>
        </div>
        <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
          <H1>홍삼룡의 블로그</H1>
        </a>
        <P>洪森龍</P>
        <Social website={"/"} github={"https://github.com/Sam-Ryong"} />
        <Ask />
      </Container>
    </header>
  );
};

export default Header;
