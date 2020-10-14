import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,300;1,400&display=swap');
*, *::before, *::after {
    box-sizing: border-box; 
    font-family: 'Lato';
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
