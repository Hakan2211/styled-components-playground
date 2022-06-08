import styled from "styled-components";

export const DefaultButton = styled.button`
  background-color: black;
  color: white;
  font-size: 1.6rem;
  border: none;
  padding: 0.4rem;
  border-radius: 2rem;
  width: 10rem;
  display: block;
  margin: 1rem auto;
  cursor: pointer;
`;

export const HipsterButton = styled(DefaultButton)`
  width: 150px;
  background: transparent;
  color: #347698;
  border: 1px solid #347698;
  display: inline-block;
  margin-right: 1rem;
  text-decoration: none;
  text-align: center;
  font-size: 1rem;
`;
