import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  --primary: #645cff;
  --white: #fff;
}

body {
  margin: 0;
  background-color: #f2f4f8;
}
`;

export default GlobalStyles;
