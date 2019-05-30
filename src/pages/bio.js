import React from 'react';
import styled from 'styled-components';
import { palette, font, breakpoint } from '../imports/variables';

const Content = styled.div`
  margin: 30vh 0 0 10vw;
  .header {
    ${font.domine};
    color: ${palette.dark};
    font-size: 2.75rem;
    width: 40vw;
    h3 {
      ${font.domine};
      color: ${font.dark};
      font-size: 2rem;
      line-height: 2.35rem;
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
    .header {
      width: 75vw;
    }
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
      <h3>
        Before moving to NYC, Zach spent his time surrounded by music and the
        arts.
      </h3>
    </div>
    <div className="body">
      <p>
        Growing up in Fairfield, Ohio, Zach was exposed to music when he began
        taking drum lessons at the age of 10. His love for music evolved into a
        love for theatre, which led Zach to a four-year journey at Wright State
        University in the BFA Musical Theatre program.
        <br />
        <br />
        During his time there, he had the opportunity to be a part of several
        shows, such as Hairspray, Sweeney Todd, Titanic, RENT, Anything Goes,
        Little Women, Hello Dolly, and most memorably, Billy Lawlor in 42nd
        Street, and Leaf Coneybear in The 25th Annual Putnam County Spelling
        Bee.
        <br />
        <br />
        In the short time following his graduation, Zach had the opportunity to
        work on the world-premiere production of Revolution in the Elbow of
        Ragnar Agnarsson Furniture Painter Off-Broadway at the Minetta Lane
        theatre. Additionally, Zach has worked regionally at theatres such as
        Cincinnati Playhouse in the Park, Repertory Theatre of St. Louis, Bucks
        County Playhouse, Theatre Under the Stars, North Carolina Theatre, Casa
        Mañana, and many others.
      </p>
    </div>
  </Content>
);
