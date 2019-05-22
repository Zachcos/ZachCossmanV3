import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import { palette, font } from '../imports/variables';

const Content = styled.div`
  margin: 30vh 0 0 10vw;
  .header {
    ${font.sentinel_semibold};
    color: ${palette.dark};
    font-size: 2.75rem;
    h3 {
      ${font.sentinel_semibold};
      color: ${font.dark};
      font-size: 2.75rem;
    }
    h6 {
      ${font.circular_book};
      color: ${palette.dark};
      font-size: 0.825rem;
      font-style: italic;
      letter-spacing: 1px;
      padding: 5px 0 0 75px;
    }
  }
  .body {
    margin: 50px;
      p {
        ${font.circular_book}
        color: ${palette.dark};
        line-height: 1.35rem;
        width: 40vw;
      }
  }
`;

export default () => (
  <React.Fragment>
    <Layout>
      <Content>
        <div className="header">
          <h3>contact me.</h3>
        </div>
        <div className="body">
          <p>This is my contact. This is my test</p>
        </div>
      </Content>
    </Layout>
  </React.Fragment>
);
