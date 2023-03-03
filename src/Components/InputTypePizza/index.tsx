import React from "react";
import { Container, InputType, InputTypeText, InputValue } from "./Styles";

interface InputPizzaProps {
  type: string;
}

export function InputTypePizza({ type }: InputPizzaProps) {
  return (
    <Container>
      <InputType>
        <InputTypeText>{type}</InputTypeText>
      </InputType>
      <InputValue placeholder="R$"/>
    </Container>
  );
}
