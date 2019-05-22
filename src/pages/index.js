import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import { palette, font } from '../imports/variables';
import heroImg from '../../static/images/ZachC186.jpg';

const Hero = styled.div`
  background: url(${heroImg}) no-repeat top;
  background-size: cover;
  height: 100vh;
  position: fixed;
  width: 30vw;
`;

export default () => (
  <React.Fragment>
    <Layout />
    <Hero />
  </React.Fragment>
);
