import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Nav from './navbar';
import GlobalStyle from '../imports/globalStyle';
import { palette, font, breakpoint } from '../imports/variables';

import heroImg from '../../static/images/ZachC186.jpg';

const Hero = styled.div`
  background: url(${heroImg}) no-repeat top;
  background-size: cover;
  height: 100vh;
  position: fixed;
  width: 30vw;
  @media screen and (${breakpoint}) {
    width: 100vw;
    z-index: -1;
  }
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
  @media screen and (${breakpoint}) {
    left: 0;
    margin-top: 70vh;
    padding-left: 0;
    width: 100vw;
    z-index: 100;
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
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
        integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
        crossOrigin="anonymous"
      />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js" />
      <title>ZachCossman.com</title>
    </Helmet>
    <Hero />
    <Nav />
    <Display>{children}</Display>
    <GlobalStyle />
  </React.Fragment>
);
