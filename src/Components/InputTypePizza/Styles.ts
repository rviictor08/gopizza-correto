import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { TextInput } from "react-native";

export const Container = styled.View`
  flex-direction: row;
  margin: 8px 0;
`;

export const InputType = styled.View`
  width: 56px;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  padding: 20px;
  border-color: ${({ theme }) => theme.COLORS.BORDER};
  border-width: 1px;
`;

export const InputTypeText = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.COLORS.SECONDARY_900};
  font-family: ${({ theme }) => theme.FONTS.TEXT};
`;

export const InputValue = styled(TextInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.COLORS.SECONDARY_900,
}))`
  flex: 1;
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.COLORS.SECONDARY_900};
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  padding: 20px;
  border-color: ${({ theme }) => theme.COLORS.BORDER};
  border-width: 1px;
`;
