import React from 'react';
import styled from 'styled-components';
import { palette, font, breakpoint } from '../imports/variables';

const Content = styled.div`
  margin: 30vh 0 0 10vw;
  .header {
    ${font.domine};
    color: ${palette.dark};
    font-size: 2.75rem;
    h3 {
      ${font.domine};
      color: ${font.dark};
      font-size: 2.75rem;
    }
    h6 {
      ${font.montserrat};
      color: ${palette.dark};
      font-size: 0.875rem;
      font-style: italic;
      letter-spacing: 1px;
      padding: 5px 0 0 75px;
    }
  }
  .body {
    margin: 50px;
    p {
      ${font.montserrat}
      color: ${palette.dark};
      line-height: 1.5rem;
      width: 40vw;
    }
    span {
      ${font.montserrat_bold}
    }
  }
  @media screen and (${breakpoint}) {
    margin: 25vh auto;
    width: 80vw;
    .body {
      margin: 50px 0;
      p {
        width: 100%;
      }
    }
  }
`;

export default () => (
  <Content>
    <div className="header">
      <h3>media.</h3>
    </div>
    <div className="body">
      <p>media coming soon.</p>
    </div>
  </Content>
);
