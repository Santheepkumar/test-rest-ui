import styled from "styled-components";
import GlobalStyle from "./styles/global";

const Wrapper = styled.div`
  max-width: 1000px;
  margin: auto;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper color='red'>Hi</Wrapper>;
    </>
  );
}

export default App;
