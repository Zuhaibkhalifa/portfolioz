import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          PortfolioZ
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">1. About us</Link>
        </li>
        <li>
          <Link to="/Work">2. Our Work</Link>
        </li>
        <li>
          <Link to="/Contact">3. Contact</Link>
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
