import React from 'react';
import styled from 'styled-components';
import * as $ from 'jquery';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { palette, font, breakpoint } from '../imports/variables';
import '../css/lightgallery.css';
import '../js/lightgallery.min.js';

const Content = styled.div`
  /* margin: 30vh 0 0 10vw; */
  margin: 15vh 0 0 0;
  .header {
    ${font.domine};
    color: ${palette.dark};
    font-size: 2.75rem;
    margin-left: 10vw;
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
    #lightgallery {
      display: flex;
      justify-content: space-around;
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
    const { data } = this.props;
    return (
      <Content>
        <div className="header">
          <h3>headshots.</h3>
        </div>
        <div className="body">
          <div id="lightgallery">
            {data.allImageSharp.nodes.map(item => (
              <a href={item.original.src} key={item.id}>
                <Img fixed={item.fixed} alt="?" />
              </a>
            ))}
          </div>
        </div>
      </Content>
    );
  }
}

export default Media;

export const query = graphql`
  query {
    allImageSharp {
      nodes {
        id
        fixed(width: 250, height: 250, quality: 70) {
          ...GatsbyImageSharpFixed
        }
        original {
          src
        }
      }
    }
  }
`;
