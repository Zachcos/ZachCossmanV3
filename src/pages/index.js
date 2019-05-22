import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import NavBar from '../components/navbar';
import { palette, font } from '../imports/variables';
import heroImg from '../../static/images/ZachC186.jpg';

const Hero = styled.div`
  background: url(${heroImg}) no-repeat top;
  background-size: cover;
  height: 100vh;
  position: fixed;
  width: 30vw;
`;

const Display = styled.div`
  background: ${palette.white};
  display: inline-block;
  min-height: 92vh;
  padding-left: 30vw;
  width: 70vw;
  h1 {
    ${font.sentinel_bold}
    color: ${palette.dark};
    font-size: 5rem;
  }

  h2 {
    ${font.sentinel_bold}
    color: ${palette.dark};
    font-size: 3.75rem;
  }
`;

export default () => (
  <React.Fragment>
    <Layout />
    <Hero />
    <Display>
      <NavBar />
    </Display>
  </React.Fragment>
);
