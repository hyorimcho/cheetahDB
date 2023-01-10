import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}

body {
  font-family: 'Ubuntu', sans-serif;
  color: #111;
}

a {
  text-decoration: none;
  color: #111;
}

button {
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-family: inherit;
}

input {
  font-family: inherit;
}

ul, li {
  list-style: none;
  padding: 0;
  margin: 0;
}

#root {
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  /* min-height: 100%; */
}
`;

export default GlobalStyle;
