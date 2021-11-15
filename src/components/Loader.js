import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  font-size: 32px;
  margin-top: 20px;
  color: rgba(255, 255, 255, 0.2);
`;

export default () => (
  <Container>
    <span role="img" aria-label="Loading">
      LOADING...
    </span>
  </Container>
);
