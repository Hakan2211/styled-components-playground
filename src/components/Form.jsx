import React from "react";
import styled, { css } from "styled-components";

const Button = styled.button.attrs((props) => {
  return { type: props.type || "button" };
})`
  background-color: var(--primary);
  border: none;
  color: white;
  padding: 0.25rem;
  cursor: pointer;
  ${({ type }) => {
    return (
      type === "submit" &&
      css`
        display: block;
        width: 100%;
        margin-top: 1rem;
        border-radius: 0.25rem;
      `
    );
  }}
`;

const BasicInput = styled.input.attrs((props) => {
  return {
    type: props.type || "text",
    placeholder: props.placeholder || "please enter value",
  };
})`
  box-sizing: border;
  padding: 0.5rem;
  border: 2px solid #d7dae0;
  border-radius: 0.25rem;
  width: 100%;
  margin-top: 1rem;
`;

const Form = () => {
  return (
    <div>
      <h2>Some Random stuff</h2>
      <Button>click me</Button>
      <form
        style={{
          width: "300px",
          backgroundColor: "white",
          padding: "2rem",
          marginTop: "1rem",
        }}
      >
        <h2>Form</h2>
        <BasicInput type="text" />
        <BasicInput type="email" placeholder=" Enter Email" />
        <BasicInput type="text" />
        <Button type="submit">Submit </Button>
      </form>
    </div>
  );
};

export default Form;
