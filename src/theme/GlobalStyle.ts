import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
    box-sizing: border-box; 
    
}

html {
    font-size: 16px;
    color: white;
  }

  body {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif, 'Lato', 'Raleway', 'Righteous', 'Open Sans';
    background: black;
  }

:root {
  --ThemeColor: rgba(246, 249, 252, 1);
}
`;



export default GlobalStyle;
