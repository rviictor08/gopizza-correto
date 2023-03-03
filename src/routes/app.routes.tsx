import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn } from "../Screens/SignIn";
import { RegisterAdm } from "../Screens/RegisterAdm";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator>
      <Screen name="SignIn" component={SignIn} options={{headerShown: false}}/>
      <Screen name="RegisterAdm" component={RegisterAdm} options={{headerShown: false}}/>
    </Navigator>
  );
}