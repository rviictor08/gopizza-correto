import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.TouchableOpacity`
  padding: 24px 135px;
  background-color: ${({ theme }) => theme.COLORS.SUCCESS_900};
  border-radius: 12px;
  align-items: center;
  margin-top: 32px;
  margin: 10px 25px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.BUTTON};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.COLORS.TITLE};
`;