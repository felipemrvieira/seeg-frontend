import { createGlobalStyle } from 'styled-components';

const size = window.innerHeight;
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
		'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
		sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;}

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
