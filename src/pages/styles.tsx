import styled from "styled-components";
import { Link as LinkBase } from "react-router-dom";

export const Link = styled(LinkBase)`
  font-size: 1.2rem;
  margin-top: 1rem;
  text-align: center;
`;

export const Title = styled.h3``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
