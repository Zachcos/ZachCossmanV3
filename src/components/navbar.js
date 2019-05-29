import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { palette, font, breakpoint } from '../imports/variables';

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
  .nav_btn {
    display: none;
    visibility: hidden;
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
  @media screen and (${breakpoint}) {
    left: 0;
    margin-left: 0;
    width: 100vw;
    .nav_btn {
      color: ${palette.dark};
      cursor: pointer;
      display: block;
      font-size: 1.75rem;
      margin-right: 50px;
      visibility: visible;
    }
    .nav {
      align-items: center;
      background-color: darkred;
      display: flex;
      flex-direction: column;
      height: 100vh;
      left: 0;
      position: fixed;
      top: 0;
      width: 100vw;
      a {
        color: ${palette.white};
        font-size: 2rem;
        &:first-child {
          margin-top: 120px
        }
        &:last-child {
          margin-bottom: 120px
        }
      }
    }
  }
`;

export default () => (
  <NavBar>
    <h1 className="brand">zach.</h1>
    <div className="nav_btn">
      <i className="fas fa-bars" />
    </div>
    <div className="nav">
      <Link to="/">home</Link>
      <Link to="/bio">bio</Link>
      <Link to="/resume">resume</Link>
      <Link to="/media">media</Link>
      <Link to="/contact">contact</Link>
    </div>
  </NavBar>
);
