import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { TextInput } from "react-native";

interface InputProps{
  type: 'description' | 'name';
}

export const Container = styled.TextInput<InputProps>`
  padding: ${({type}) => type === 'description' ? 40 : 20}px;
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.COLORS.SECONDARY_900};
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  border-color: ${({ theme }) => theme.COLORS.BORDER};
  border-width: 1px;
  border-radius: 12px;
  margin-bottom: 16px;
`;