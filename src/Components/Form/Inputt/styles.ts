import { RFValue } from 'react-native-responsive-fontsize';
import styled from "styled-components/native";
import { LinearGradient } from 'expo-linear-gradient'
import { TextInput } from 'react-native';

interface StylesProps{
  type: 'login' | 'request';
}

export const Container = styled(TextInput).attrs(({theme}) => ({
  placeholderTextColor: theme.COLORS.SHAPE,
}))<StylesProps>`
  font-family: ${ ( {theme} ) => theme.FONTS.TEXT};
  font-size: ${RFValue(14)}px;

  background-color: ${({ theme, type }) =>
  type === 'request' ? theme.COLORS.TITLE : theme.COLORS.PRIMARY_900};
  /* background-color: ${( {theme} ) => theme.COLORS.PRIMARY_900}; */

  color: ${({ theme, type }) =>
  type === 'request' ? theme.COLORS.SECONDARY_900 : theme.COLORS.TITLE};
  padding: 20px 21px;
  border: 1px ${({theme}) => theme.COLORS.SHAPE};
  border-radius: 12px;
  justify-content: center;
  border-radius: 12px;
`;