import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <a id="logo" href="#">
          PortfolioZ
        </a>
      </h1>
      <ul>
        <li>
          <a href="3">1. About us</a>
        </li>
        <li>
          <a href="3">2. Our Work</a>
        </li>
        <li>
          <a href="3">3. Contact</a>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.div`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #ef233c;

  a {
    color: #2b2d42;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    color: #2b2d42;
    font-size: 2rem;
    font-family: "Fascinate Inline", cursive;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
`;

export default Nav;
