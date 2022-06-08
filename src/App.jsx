import "./index.css";

import BasicTitle from "./components/BasicTitle";
import { DefaultButton, HipsterButton } from "./components/Buttons";
import ComplexTitle from "./components/ComplexTitle";
import Card from "./components/Card";
import GlobalStyles from "./components/global-styles";
import styled, { ThemeProvider } from "styled-components";
import { useState } from "react";
import Loading from "./components/Loading";
import Form from "./components/Form";

const BaseTheme = {
  color: "#222",
  backgroundColor: "#fff",
};
const DarkTheme = {
  color: "#fff",
  backgroundColor: "#222",
};

const Container = styled.div`
  padding: "2rem";
  color: ${(props) => props.theme.color};
  background: ${(props) => props.theme.backgroundColor};
`;

function App() {
  const [baseTheme, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme(!baseTheme);
  };

  return (
    <ThemeProvider theme={baseTheme === true ? BaseTheme : DarkTheme}>
      <GlobalStyles />
      <Container>
        <BasicTitle special>Styled Component</BasicTitle>
        <BasicTitle>Styled Component</BasicTitle>
        <DefaultButton>Click Me</DefaultButton>
        <HipsterButton>Click Me</HipsterButton>
        <ComplexTitle title="Styled Component" />
        <Card />
        <h1>Hello Hakan</h1>
        <button onClick={toggleTheme}>Toggle</button>
        <Loading />
      </Container>
      <h3>AS Prop</h3>
      <HipsterButton as="a" href="https://www.fundavoll.com">
        Click Me
      </HipsterButton>
      <HipsterButton>Click Me</HipsterButton>
      <HipsterButton>Click Me</HipsterButton>
      <Form />
    </ThemeProvider>
  );
}

export default App;
