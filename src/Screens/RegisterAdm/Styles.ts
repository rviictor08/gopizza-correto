import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Ionicons } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const MainRegister = styled.ScrollView`
  flex: 1;
  padding: 32px 25px;
`;

export const Label = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  color: ${({ theme }) => theme.COLORS.SECONDARY_900};
  margin-bottom: 11px;
`;

export const LabelDescriptionText = styled.Text`
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  color: ${({ theme }) => theme.COLORS.SECONDARY_900};
`;

export const LabelDescription = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const UploadImage = styled.View`
  padding: 0 30px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
`;

export const ImageAreaUploadImage = styled.View``;

export const TextUploadImage = styled.Text`
  text-align: center;
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.COLORS.SECONDARY_900};
  font-family: ${({ theme }) => theme.FONTS.TEXT};
`;

export const ButtonLoadUploadImage = styled.View``;

export const TextButtonLoadUploadImage = styled.View``;

export const ImageArea = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 160px;
  border-width: 1px;
  border-radius: 80px;
  border-color: ${({ theme }) => theme.COLORS.SECONDARY_900};
  border-style: dotted;
`;

export const ButtonLoad = styled.TouchableOpacity`
  padding: 24px 28px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_800};
  border-radius: 12px;
  align-items: center;
`;

export const TextButtonLoad = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.COLORS.TITLE};
  font-family: ${({ theme }) => theme.FONTS.BUTTON};
`;
