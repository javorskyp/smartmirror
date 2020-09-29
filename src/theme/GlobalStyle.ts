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
  --PrimaryDarker:rgba(0, 73, 122, 1);
  --PrimaryDark: rgba(0, 94, 157, 1);
  --PrimaryBasic: rgba(0, 113, 190, 1);
  --PrimaryLight: rgba(46, 139, 202, 1);
  --PrimaryLighter: rgba(139, 190, 225, 1);
  --PrimaryBorder: rgba(50, 223, 255, 1)

  --LightThemeBcg: rgba(241, 246, 249, 1);
  --LightThemeLightContrast:rgba(220, 233, 241, 1) ;
  --LightThemeOpposite: rgba(33, 38, 42, 1);
  --LightThemeStrongContrast: rgba(66, 76, 83, 1);
  --LightThemeDisabled: rgba(185, 211, 228, 1) ;
  --LightThemeSpi: rgba(246, 249, 252, 1);
  --LightPurple: rgba(17, 24, 47, 1);
  
  --DarkThemeBcg: rgba(48, 48, 48, 1);
  --DarkThemeLightContrast: rgba(66, 76, 83, 1);
  --DarkThemeOpposite: rgba(241, 246, 249, 1);
  --DarkThemeStrongContrast:rgba(220, 233, 241, 1) ;
  --DarkThemeDisabled:rgba(98, 113, 124, 1) ;
  --DarkThemeSpi:rgba(22, 29, 41, 1);
  --DarkThemeSpi2:rgba(16, 25, 42, 1);
  --BackgroundBlack:rgba(0, 0, 0, 0.1);
}
  
`;



export default GlobalStyle;
