import React from 'react';
import { Helmet } from 'react-helmet';
import GlobalStyle from '../imports/globalStyle';

export default ({ children }) => (
  <React.Fragment>
    <Helmet>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>ZachCossman.com</title>
    </Helmet>
    <GlobalStyle />
  </React.Fragment>
);
