import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  #root {
    margin: 0 auto;
    max-width: 1900px; /* Define a largura máxima para os componentes */
  }
`;

export default GlobalStyles;
