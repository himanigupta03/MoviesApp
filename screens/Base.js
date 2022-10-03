import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Movies from './Movies';

const Base = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {textTransform: 'none'},
      }}>
      <Tab.Screen name="Movies" component={Movies} />
      <Tab.Screen name="Search Result" component={Movies} />
      <Tab.Screen name="TV Shows" component={Movies} />
    </Tab.Navigator>
  );
};

export default Base;
