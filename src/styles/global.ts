import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
:root {
  --background: #f0f2f5;
  --red: #E52E4D;
  --blue: #5429CC;

  --blue-light: #6933FF;

  --text-title: #363f5f;
  --text-body: #969CB3;
  
  --shape: #FFFFFF;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

// font-siza: 16 px Desktop

html {
  @media (max-width: 1080px){
    font-size: 93.75%; // 15px
  }

  @media (max-width: 720){
    font-size: 87.5%; // 14px
  }
}

body{
  background: var(--background);
  --webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 600;
}

button{
  cursor: pointer;
}

[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}

`