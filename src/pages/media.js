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
      width: 150px;
      height: 150px;
        &:first-child {
          margin-left: 4vw;
        }
        img {
          border-radius: 6px;
        }
      }
    }
    @media screen and (${breakpoint}) {
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
  onLightGallery = node => {
    this.lightgallery = node;
    $(node).lightGallery();
  };

  render() {
    const { data } = this.props;
    return (
      <Content>
        <div className="header">
          <h3>headshots.</h3>
        </div>
        <div className="body">
          <div id="lightgallery" ref={this.onLightGallery}>
            {data.images.nodes
              .filter(item => item.original.src.includes('headshot'))
              .map(item => (
                <a href={item.original.src} key={item.id}>
                  <Img fluid={item.fluid} alt="" />
                </a>
              ))}
          </div>
        </div>
        <div className="header">
          <h3>#couchCovers</h3>
        </div>
        <div className="body">
          <div id="video-gallery" ref={this.onLightGallery}>
            {data.videos.nodes.map(item => {
              const current = item.findMe;
              return data.images.nodes
                .filter(item2 => item2.fluid.src.includes(current))
                .map(item2 => (
                  <a href={item.videoUrl} alt={item.title}>
                    <Img fluid={item2.fluid} alt={item.title} />
                  </a>
                ));
            })}
          </div>
        </div>
      </Content>
    );
  }
}

export default Media;

export const query = graphql`
  query {
    images: allImageSharp {
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

    videos: allVideoDataJson {
      nodes {
        title
        artist
        videoUrl
        findMe
      }
    }
  }
`;
