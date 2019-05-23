import React from 'react';
import styled from 'styled-components';
import { palette, font } from '../imports/variables';

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
`;

export default () => (
  <Content>
    <div className="header">
      <h3>Back in NYC</h3>
      <h6>Saturday, March 18th</h6>
    </div>
    <div className="body">
      <p>
        Zach is back in NYC after playing <span>Jerry Allison</span> in{' '}
        <span>BUDDY: The Buddy Holly Story</span> at Bucks County Playhouse in
        New Hope, PA.
        <br />
        <br />
        This production returned to the Bucks County Playhouse for the 3rd time,
        after wildly-successful runs in 2016 and 2017. Zach played Jerry Allison
        in both of the previous iterations.
        <br />
        <br />
        The production ran February 10th – March 3rd, with direction by Hunter
        Foster and choreography by Lorin Latarro.
        <br />
        <br />
        Stay tuned for information about upcoming gigs.
      </p>
    </div>
  </Content>
);
