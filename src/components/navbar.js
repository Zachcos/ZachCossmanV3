import React, { useState } from 'react';
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
    font-size: 2rem;
    margin-left: 25px;
    margin-right: auto;
    a {
      color: ${palette.dark};
      text-decoration: none;
    }
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
      position: fixed;
      right: -20px;
      visibility: visible;
      z-index: 200;
    }
    .nav {
      align-items: center;
      background-color: ${palette.light};
      display: flex;
      flex-direction: column;
      height: 0;
      left: 0;
      opacity: 0;
      position: fixed;
      top: 0;
      visibility: none;
      width: 100vw;

      transition: opacity 0.35s, visibility 0.35s, height 0.35s;
      a {
        color: ${palette.dark};
        font-size: 2rem;
        font-weight: 700;
        &:first-child {
          margin-top: 60px
        }
        &:last-child {
          margin-bottom: 120px
        }
      }
      &.open {
        height: 100vh;
        opacity: 1;
        visibility: visible;
      }
    }
  }
`;

export default function Nav() {
  const [open, setOpen] = useState(false);

  function navToggle() {
    if (open) {
      document.getElementById('nav').classList.remove('open');
      document.getElementById('nav_btn').classList.add('fa-bars');
      document.getElementById('nav_btn').classList.remove('fa-times');
      setOpen(!open);
    } else {
      document.getElementById('nav').classList.add('open');
      document.getElementById('nav_btn').classList.add('fa-times');
      document.getElementById('nav_btn').classList.remove('fa-bars');
      setOpen(!open);
    }
  }

  return (
    <NavBar>
      <h1 className="brand">
        <Link to="/">zach.</Link>
      </h1>
      <div className="nav_btn" onClick={navToggle}>
        <i id="nav_btn" className="fas fa-bars" />
      </div>
      <div className="nav" id="nav">
        <Link onClick={navToggle} to="/">
          home
        </Link>
        <Link onClick={navToggle} to="/bio">
          bio
        </Link>
        <Link onClick={navToggle} to="/resume">
          resume
        </Link>
        <Link onClick={navToggle} to="/media">
          media
        </Link>
        <Link onClick={navToggle} to="/contact">
          contact
        </Link>
      </div>
    </NavBar>
  );
}
