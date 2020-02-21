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
    a {
      color: ${palette.dark};
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
      <h3>Ren McCormack in Footloose</h3>
      <h6>Monday, February 24th</h6>
    </div>
    <div className="body">
      <p>
        Zach is currently in rehearsals to play Ren McCormack in Footloose
        aboard the Norwegian Joy.
        <br />
        <br />
        Stay tuned for more information about the show.
      </p>
    </div>
  </Content>
);
