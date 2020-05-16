import React from 'react';
import styled from 'styled-components';
import { palette, font, breakpoint } from '../imports/variables';

import resume from '../../static/images/resume.gif';
import resumePDF from '../../static/images/ZachCossman.pdf';

const Content = styled.div`
  margin: 10vh 10vw 0 10vw;
  img {
    margin: 0 auto 75px;
    width: 100%;
  }
  @media screen and (${breakpoint}) {
    margin: 20vh auto 0 auto;
    width: 95%;
  }
`;

const DownloadLink = styled.div`
  padding-top: 25px;
  margin-bottom: 50px;
  text-align: center;
  a {
    ${font.domine};
    color: ${palette.dark};
    font-size: 1.35rem;
  }
`;

export default function Resume() {
  return (
    <Content>
      <DownloadLink>
        <a href={resumePDF}>Download headshot/resume</a>
      </DownloadLink>
      <img src={resume} alt="Zach Cossman Resume" />
    </Content>
  );
}
