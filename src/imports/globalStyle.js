import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  ul {
    display: inline-block !important;
  }

  @font-face {
    font-family: 'Sentinel';
    src: url('fonts/Sentinel-Semibold.woff2') format('woff2'),
        url('fonts/Sentinel-Semibold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
  } 
  @font-face {
      font-family: 'Sentinel';
      src: url('fonts/Sentinel-Bold.woff2') format('woff2'),
          url('fonts/Sentinel-Bold.woff') format('woff');
      font-weight: bold;
      font-style: normal;
  }
  @font-face {
      font-family: 'Circular Std Book';
      src: url('fonts/CircularStd-Book.woff2') format('woff2'),
          url('fonts/CircularStd-Book.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }
  @font-face {
      font-family: 'Circular Std Book';
      src: url('fonts/CircularStd-BookItalic.woff2') format('woff2'),
          url('fonts/CircularStd-BookItalic.woff') format('woff');
      font-weight: normal;
      font-style: italic;
  }
  @font-face {
      font-family: 'Circular Std';
      src: url('fonts/CircularStd-Black.woff2') format('woff2'),
          url('fonts/CircularStd-Black.woff') format('woff');
      font-weight: 900;
      font-style: normal;
  }
  @font-face {
      font-family: 'Circular Std';
      src: url('fonts/CircularStd-BlackItalic.woff2') format('woff2'),
          url('fonts/CircularStd-BlackItalic.woff') format('woff');
      font-weight: 900;
      font-style: italic;
  }
`;

export default GlobalStyle;
