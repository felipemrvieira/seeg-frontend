import { createGlobalStyle } from 'styled-components';

const size = window.innerHeight;
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Lato', sans-serif;

	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
  }

  a {
	text-decoration: none;
	color: inherit;
    &:hover {
      color: inherit;
    }
  }

  p {
    margin: 0;
  }

  #root{
    min-height: ${size}px;
    display: flex;
    flex-direction: column;
  }

`;

export default GlobalStyle;
