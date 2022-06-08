import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <StyledCard>
      <img
        src="https://images.unsplash.com/photo-1654534095007-5db1b4faa1a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        alt="image"
      />

      <footer>
        <h4>Image Name</h4>
        <p>$15</p>
      </footer>
    </StyledCard>
  );
};

const StyledCard = styled.article`
  width: 90vw;
  max-width: 300px;
  background: var(--white);
  border-radius: 0.25rem;
  transition: all 0.5s ease-in-out;
  img {
    width: 100%;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }
  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    h4 {
      text-transform: capitalize;
      &::before {
        content: "Name : ";
        color: red;
      }
    }
    p {
      color: var(--primary);
      font-weight: 700;
    }
  }

  &:hover {
    box-shadow: 0 3px 3px #222;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    max-width: 600px;
  }
`;

export default Card;
