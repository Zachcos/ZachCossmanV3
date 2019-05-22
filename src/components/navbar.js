import React from 'react';
import styled from 'styled-components';
import { palette, font } from '../imports/variables';

const NavBar = styled.div`
  align-items: center;
  background: ${palette.light};
  display: flex;
  height: 60px;
  position: fixed;
  width: 70vw;
  .brand {
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
      ${font.circular_book}
      color: ${palette.dark};
      font-size: 0.8rem;
      text-decoration: none;
      text-transform: uppercase;
    }
  }
`;

export default () => (
  <NavBar>
    <h1 className="brand">zach.</h1>
    <div className="nav">
      <a href="#" className="nav--item">
        home
      </a>
      <a href="#" className="nav--item">
        bio
      </a>
      <a href="#" className="nav--item">
        resume
      </a>
      <a href="#" className="nav--item">
        media
      </a>
      <a href="#" className="nav--item">
        contact
      </a>
    </div>
  </NavBar>
);
