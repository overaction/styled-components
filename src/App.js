import React, { Component } from "react";
import styled, { createGlobalStyle, keyframes, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    padding:0;
    margin:0;
  }
`;

class App extends Component {
  render() {
    return (
    <React.Fragment>
      <GlobalStyle />
      <Container>
        <Button>Hello</Button>
        <Button dangers rotationTime={1}>Hello!</Button>
        <Anchor href="http://google.com">Go to google</Anchor>
      </Container>
    </React.Fragment>
    )
  }
}

const Container = styled.div`
    height:100vh;
    width:100%;
    background-color:pink;
`;

const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  color: white;
  font-weight: 600;
  -webkit-appearance: none;
  cursor: pointer;
  &:active,
  &:focus {
      outline: none;
  }
  background-color: ${props => (props.dangers ? "#e74c3c" : "#2ecc71")};
  ${props2 => {
    if (props2.dangers) {
      return css`animation: ${rotation} ${props2.rotationTime}s linear infinite`;
    }
  }};
`;

const Anchor = styled(Button.withComponent("a"))`
  text-decoration:none;
`;

const rotation = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;

export default App;