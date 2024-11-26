import React from "react";
import "./Header.css";
import Social from "../Social";
import Container from "../Container";
import H1 from "../H1";
import P from "../P";
import Ask from "../Ask/Ask";

const Header = () => {
  return (
    <header className="header">
      <Container>
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
