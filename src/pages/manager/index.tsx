import { Button, Forms } from "components";
import { formExposed, formValues } from "components/forms/person/types";
import React, { useRef } from "react";
import { Container, Title, Link } from "../styles";
import { Card } from "./styles";
import { ManagerProps } from "./types";

const Manager: React.FC<ManagerProps> = () => {
  const formPersonRef = useRef<formExposed>(null);

  const submitAction = (values: formValues) => {
    // REGRA DE NEGOCIO PARA MANAGER

    console.log(values);
  };

  return (
    <Container>
      <Title>Manager</Title>
      <Card>
        <Forms.Person ref={formPersonRef} submitAction={submitAction} />

        <Button type="button" onClick={() => formPersonRef.current?.submit()}>
          Enviar
        </Button>

        <Link to="/">Admin</Link>
      </Card>
    </Container>
  );
};

export default Manager;
