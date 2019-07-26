import React from 'react';
import styled from 'styled-components';
import * as $ from 'jquery';
import { palette, font, breakpoint } from '../imports/variables';
import '../css/lightgallery.css';
import '../js/lightgallery.min.js';

import headshot1 from '../../static/images/headshots/186.jpg';
import headshot2 from '../../static/images/headshots/141.jpg';
import headshot3 from '../../static/images/headshots/116.jpg';

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

class Media extends React.Component {
  componentDidMount() {
    return (
      <script>
        $(document).ready(function() {$('#lightgallery').lightGallery()})
      </script>
    );
  }

  render() {
    return (
      <Content>
        <div className="header">
          <h3>media.</h3>
        </div>
        <div className="body">
          <div id="lightgallery">
            <a href={headshot1}>
              <img src={headshot1} />
            </a>
            <a href={headshot2}>
              <img src={headshot2} />
            </a>
            <a href={headshot3}>
              <img src={headshot3} />
            </a>
          </div>
        </div>
      </Content>
    );
  }
}

export default Media;
