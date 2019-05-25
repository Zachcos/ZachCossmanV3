import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { palette, font } from '../imports/variables';

const NavBar = styled.div`
  align-items: center;
  background: ${palette.light};
  display: flex;
  height: 60px;
  position: fixed;
  margin-left: 30vw;
  width: 70vw;
  z-index: 10;
  .brand {
    ${font.domine}
    color: ${palette.dark};
    font-size: 2rem;
    margin-left: 25px;
    margin-right: auto;
  }
  .nav {
    display: flex;
    justify-content: space-around;
    margin-right: 25px;
    width: 45%;
    a {
      ${font.montserrat}
      color: ${palette.dark};
      font-size: 0.8rem;
      text-decoration: none;
      text-transform: uppercase;
    }
  }
  @media screen and (max-width: 835px) {
    left: 0;
    margin-left: 0;
    width: 100vw;
  }
`;

export default () => (
  <NavBar>
    <h1 className="brand">zach.</h1>
    <div className="nav">
      <Link to="/">home</Link>
      <Link to="/bio">bio</Link>
      <Link to="/resume">resume</Link>
      <Link to="/media">media</Link>
      <Link to="/contact">contact</Link>
    </div>
  </NavBar>
);
