import {View, StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import AppNavigation from './navigation';

export default function e() {
  return (
    <View style={styles.mainComponent}>
      <StatusBar animated={true} showHideTransition={'slide'} />
      <AppNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  mainComponent: {
    flex: 1,
  },
});
