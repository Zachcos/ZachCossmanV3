import React from 'react';
import styled from 'styled-components';
import { palette, font, breakpoint } from '../imports/variables';

import agencyLogo from '../../static/images/annsteeleagency.png';

const Content = styled.div`
  margin: 20vh 0 0 10vw;
  @media screen and (${breakpoint}) {
    margin: 20vh auto 0 auto;
  }
  .header {
    ${font.domine};
    color: ${palette.dark};
    padding-bottom: 45px;
    @media screen and (${breakpoint}) {
      padding-left: 25px;
    }
    h3 {
      ${font.domine};
      color: ${palette.dark};
      font-size: 1.65rem;
    }
  }
  .body {
    margin: 50px;
    width: 50%;
    text-align: center;
    @media screen and (${breakpoint}) {
      margin: 50px auto;
      width: 95%;
    }
    img { 
      max-width: 250px;
      margin: 0 auto 25px auto;
    }
    p {
      ${font.montserrat}
      color: ${palette.dark};
      line-height: 1.35rem;
      margin-bottom: 10px;
    }
    a {
      ${font.montserrat};
      font-size: 0.9rem;
      color: ${palette.dark};
    }
    .spacer {
      height: 75px;
      width: 100%;
    }
  }
`;

export default () => (
  <Content>
    <div className="header">
      <h3>Zach is represented by:</h3>
    </div>
    <div className="body">
      <img src={agencyLogo} alt="Ann Steele Agency logo" />
      <p>330 West 42nd St. 18th Floor. New York, NY 10036</p>
      <p>p: 212.629.9112</p>
      <a href="http://annsteeleagency.com" target="_blank">
        www.annsteeleagency.com
      </a>
      <div className="spacer" />
      <p>For web design information, visit:</p>
      <a href="https://zachcossmandesigns.com" target="_blank">
        www.zachcossmandesigns.com
      </a>
      <div className="spacer" />
      <p>For personal inquiries, email me at:</p>
      <a href="mailto:Zachcos@gmail.com" target="_blank">
        Zachcos@gmail.com
      </a>
    </div>
  </Content>
);
