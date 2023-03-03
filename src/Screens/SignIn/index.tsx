import React from 'react';
import { Input } from '../../Components/Form/Inputt';
import { Button } from '../../Components/Form/Buttonn';
import { useNavigation } from "@react-navigation/native";

import { 
  Container,
  Header,
  Image,
  Title,
  LoginInputs,
  Footer,
  Text,
} from './Styles';

export function SignIn(){

  const navigation = useNavigation();

  return(
    <Container>
      <Header>
        <Image source={require('../../../assets/brand.png')} />
      </Header>
      <LoginInputs>
        <Title>Login</Title>
        <Input 
          type="login"
          placeholder="E-mail"
        />
        <Input 
          type="login"
          placeholder="Senha"
        />
      </LoginInputs>
      <Footer>
        <Text>Esqueci minha senha</Text>
      </Footer>
      <Button type='login' title='Entrar'/>
    </Container>
  )
}