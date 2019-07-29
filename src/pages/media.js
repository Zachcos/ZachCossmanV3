import React from 'react';
import styled from 'styled-components';
import * as $ from 'jquery';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { palette, font, breakpoint } from '../imports/variables';
import 'lightgallery';
import 'lg-video';
import '../css/lightgallery.css';

import featheredIndiansThumb from '../mediaImages/featheredIndiansThumb.png';
import rainbowsNeverDieThumb from '../mediaImages/rainbowsNeverDieThumb.png';
import ifYouWereTheRainThumb from '../mediaImages/ifYouWereTheRainThumb.png';

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
  }
  .body {
    margin: 50px 50px 100px 50px;
    p {
      ${font.montserrat}
      color: ${palette.dark};
      line-height: 1.5rem;
      width: 40vw;
    }
    span {
      ${font.montserrat_bold}
    }
    #lightgallery,
    #video-gallery {
      display: flex;
      height: 100%;
    a {
      display: block;
      margin-right: 15px;
      max-width: 150px;
      max-height: 150px;
      width: 250px;
      height: 250px;
        &:first-child {
          margin-left: 4vw;
        }
        img {
          border-radius: 6px;
        }
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
          <h3>#couchCovers</h3>
        </div>
        <div className="body">
          <div id="video-gallery" ref={this.onLightGallery}>
            <a href="https://youtu.be/_XK7NsJIB-s" data-poster="">
              <img
                src={featheredIndiansThumb}
                alt="Feathered Indians by Tyler Childers"
              />
            </a>
            <a href="https://youtu.be/lUA--zWVwZ4" data-poster="">
              <img
                src={rainbowsNeverDieThumb}
                alt="Where Rainbows Never Die by The Steeldrivers"
              />
            </a>
            <a href="https://youtu.be/zsMcn5ukpok" data-poster="">
              <img
                src={ifYouWereTheRainThumb}
                alt="If You Were the Rain by Stephen Day"
              />
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
