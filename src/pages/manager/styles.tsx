import { Card as CardBase } from "components";
import styled from "styled-components";

export const Card = styled(CardBase)`
  padding: 1.6rem;
  margin-top: 0.8rem;
  max-width: 300px;
  width: 100%;

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
