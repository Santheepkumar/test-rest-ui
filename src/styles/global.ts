import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --thatPurple: rgb(128, 0, 255, 1);
    --lightPurple: rgb(168, 85, 247);
    --littlePurple: rgb(250 245 255 / 0.3);
    --borderGray: #d2d6dc;
    --borderGray2: #d2d6dc60;
    --darkMode: rgba(26, 32, 46, 1);
    --labelColor: rgb(206, 202, 202);
    --red:  red
  };
  body {
    margin: 0;
    padding: 0;
  };
  button {
      all:unset;
      cursor: pointer;
  }
`;

export default GlobalStyle;
