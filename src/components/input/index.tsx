import React, { PropsWithChildren } from "react";
import { Container, Input as InputBase, Error } from "./styles";
import { InputProps } from "./types";

const Input: React.FC<PropsWithChildren<InputProps>> = ({ error, ...rest }) => {
  return (
    <Container>
      <InputBase {...rest} />
      {error && <Error>{error}</Error>}
    </Container>
  );
};

export default React.memo(Input);
