import React from "react";
import { Button } from "../../Components/Form/Button";
import { Input } from "../../Components/Form/Input";
import { Header } from "../../Components/Header";
import { InputTypePizza } from "../../Components/InputTypePizza";

import {
  Container,
  MainRegister,
  Label,
  LabelDescription,
  LabelDescriptionText,
  UploadImage,
  ImageArea,
  TextUploadImage,
  ButtonLoad,
  TextButtonLoad,
} from "./Styles";

export function RegisterAdm() {
  return (
    <Container>
      <Header />
      <MainRegister>
        <UploadImage>
          <ImageArea>
            <TextUploadImage>Nenhuma foto{"\n"}carregada</TextUploadImage>
          </ImageArea>
          <ButtonLoad>
            <TextButtonLoad>Carregar</TextButtonLoad>
          </ButtonLoad>
        </UploadImage>
        <Label>Nome</Label>
        <Input type="name" />
        <LabelDescription>
          <Label>Descrição</Label>
          <LabelDescriptionText>Máx. 60 caracteres</LabelDescriptionText>
        </LabelDescription>
        <Input type="description" />
        <Label>Tamanhos e preços</Label>
        <InputTypePizza type="P" />
        <InputTypePizza type="M" />
        <InputTypePizza type="G" />
      </MainRegister>
      <Button title="Cadastrar pizza" />
    </Container>
  );
}
