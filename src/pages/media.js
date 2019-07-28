import React from 'react';
import styled from 'styled-components';
import * as $ from 'jquery';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { palette, font, breakpoint } from '../imports/variables';
import 'lightgallery';
import 'lg-video';
import '../css/lightgallery.css';

const Content = styled.div`
  /* margin: 30vh 0 0 10vw; */
  margin: 15vh 0 0 0;
  .header {
    ${font.domine};
    color: ${palette.dark};
    font-size: 2.75rem;
    margin-left: 5vw;
    h3 {
      ${font.domine};
      color: ${font.dark};
      font-size: 2rem;
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
      height: 500px;
      a {
        margin-right: 15px;
        &:first-child {
          margin-left: 4vw;
        }
        img {
          border-radius: 6px;
        }
      }
    }
    a {
      display: block;
      max-width: 150px;
      max-height: 150px;
      width: 250px;
      height: 250px;
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
  // componentDidMount() {
  //   return (
  //     <script>
  //       $(document).ready(function() {$('#lightgallery').lightGallery()})
  //     </script>
  //   );
  // }

  onLightGallery = node => {
    this.lightgallery = node;
    $(node).lightGallery();
  };

  componentWillUnmount() {
    $(this.lightGallery)
      .data('lightGallery')
      .destroy(true);
  }

  render() {
    const { data } = this.props;
    return (
      <Content>
        <div className="header">
          <h3>headshots.</h3>
        </div>
        <div className="body">
          <div id="lightgallery" ref={this.onLightGallery}>
            {data.allImageSharp.nodes
              .filter(item => item.original.src.includes('headshot'))
              .map(item => (
                <a href={item.original.src} key={item.id}>
                  <Img fluid={item.fluid} alt="?" />
                </a>
              ))}
          </div>
        </div>
        <div className="header">
          <h3>video test</h3>
          <div id="video-gallery" ref={this.onLightGallery}>
            <a
              href="https://www.youtube.com/watch?v=n3QfRJsF9Pk"
              data-poster=""
            >
              <img src="/src/mediaImages/headshot_1.jpg" alt="test" />
            </a>
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
        fluid(maxWidth: 250, maxHeight: 250, quality: 70) {
          ...GatsbyImageSharpFluid
        }
        original {
          src
        }
      }
    }
  }
`;
