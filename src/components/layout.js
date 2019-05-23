import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import NavBar from './navbar';
import GlobalStyle from '../imports/globalStyle';
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
    ${font.domine}
    color: ${palette.dark};
    font-size: 5rem;
  }
  h2 {
    ${font.domine}
    color: ${palette.dark};
    font-size: 3.75rem;
  }
`;

export default ({ children }) => (
  <React.Fragment>
    <Helmet>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <link
        href="https://fonts.googleapis.com/css?family=Domine:400,700|Montserrat:500,500i,700,700i&display=swap"
        rel="stylesheet"
      />
      <title>ZachCossman.com</title>
    </Helmet>
    <Hero />
    <Display>
      <NavBar />
      {children}
    </Display>
    <GlobalStyle />
  </React.Fragment>
);
