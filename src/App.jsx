import "./index.css";

import BasicTitle from "./components/BasicTitle";
import { DefaultButton, HipsterButton } from "./components/Buttons";
import ComplexTitle from "./components/ComplexTitle";

function App() {
  return (
    <div style={{ padding: "2rem" }} className="App">
      <BasicTitle special>Styled Component</BasicTitle>
      <BasicTitle>Styled Component</BasicTitle>
      <DefaultButton>Click Me</DefaultButton>
      <HipsterButton>Click Me</HipsterButton>
      <ComplexTitle title="Styled Component" />
    </div>
  );
}

export default App;
