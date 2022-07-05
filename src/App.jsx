import React from "react";
import styled from "styled-components";
import Main from "./components/Main";

function App() {
  return (
    <Wrapper>
      <Main />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #27292c;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export default App;
