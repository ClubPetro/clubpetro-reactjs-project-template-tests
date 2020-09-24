import { Card as CardBase } from "components";
import styled from "styled-components";

export const Card = styled(CardBase)`
  padding: 2.4rem 1.6rem;
  margin-top: 0.8rem;
  width: 100%;

  @media (min-width: 415px) {
    max-width: 400px;
  }

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: stretch;
  align-content: stretch;

  button {
    margin-top: 0.8rem;
  }
`;
