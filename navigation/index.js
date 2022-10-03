import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import screens from '../screens';

const AppNavigation = () => {
  const Stack = createNativeStackNavigator();
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'white',
    },
  };
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        headerMode={'float'}
        screenOptions={{
          backgroundColor: 'blue',
          headerStyle: {
            backgroundColor: '#33ACDE',
          },
          headerTitleStyle: {
            color: 'white',
          },
          headerLeft: null,
        }}>
        <Stack.Screen name="Movies App" component={screens.Base} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
