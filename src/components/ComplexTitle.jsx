import React from "react";
import styled from "styled-components";

const ComplexTitle = ({ title }) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h1 {
    text-transform: "capitalize";
    text-align: center;
    color: var(--primary);
  }
`;

export default ComplexTitle;
