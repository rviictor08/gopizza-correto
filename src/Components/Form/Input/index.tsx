
import React from "react";
import { TextInputProps } from "react-native";
import { Container } from "./Styles";

interface InputProps extends TextInputProps{
  type: 'description' | 'name';
}

type Props = InputProps

export function Input({type, ...rest}: Props) {
    return (
      <Container type={type} {...rest}/>
    )
}