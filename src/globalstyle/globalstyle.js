import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
    margin: 0 auto;
  padding: 0;
  background-image: linear-gradient(to left,black, purple, black);
  color: white;
    max-width: 70rem;
    align-items: center;
    justify-content: center;
}`;

/* const theme = {
  body: {
    margin: "0",
    padding: "0",
    boxSizing: "border-box",
    backgroundColor: "black",
    color: "white",
    display: "flex",
  },
}; */
export default GlobalStyle;
