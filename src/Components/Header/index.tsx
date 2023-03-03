import React from "react";
import {
  Container,
  Button,
  User,
  UserGreething,
  UserWrapper,
  DeleteArea,
  DeleteText,
} from "./Styles";
import { AntDesign } from "@expo/vector-icons";

export function Header() {
  return (
    <Container>
        <UserWrapper>
          <Button>
            <AntDesign name="left" size={18} color="#fff" />
          </Button>
          <User>
            <UserGreething>Cadastrar</UserGreething>
          </User>
          <DeleteArea>
            <DeleteText>Deletar</DeleteText>
          </DeleteArea>
        </UserWrapper>
    </Container>
  );
}
