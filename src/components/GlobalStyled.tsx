import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style-type: none;
  border: none;
  font-family: "Inter", sans-serif;
}
:root {
  --brand-color: #e07b67;
  /*Dark scale*/
  --dark-10: #121214;
  --dark-20: #17171a;
  --dark-30: #202024;
  --dark-40: #252529;
  --dark-50: #afabb6;
  --dark-60: #ffffff;
}
html {
    font-size: 62.5%;
}
body {
    color: var(--dark-60);
    font-size: 1.4rem;
    }
`;