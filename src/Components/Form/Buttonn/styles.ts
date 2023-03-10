import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native';
import styled from "styled-components/native";

interface StylesProps{
  type: 'login' | 'request';
}

export const Container = styled(TouchableOpacity).attrs(({theme}) => ({
  placeholderTextColor: theme.COLORS.TITLE,
}))<StylesProps>`
  margin-top: 20px;
  width: 100%;
  padding: 18px;
  border-radius: 12px;
  background-color: ${( {theme} ) => theme.COLORS.PRIMARY_800};
  background-color: ${({ theme, type }) =>
  type === 'request' ? theme.COLORS.SUCCESS_900 : theme.COLORS.PRIMARY_800};
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${ ( {theme}) => theme.COLORS.TITLE};
`;