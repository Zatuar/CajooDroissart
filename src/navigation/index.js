import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Landing from '../features/landing/landing.screen';
import Login from '../features/login/login.screen';
import Phone from '../features/connexions/phone.screen';
const Stack = createNativeStackNavigator();

const rootContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="landing" component={Landing} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="phone" component={Phone} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default rootContainer;
