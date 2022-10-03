import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';
import AppNavigation from './navigation';


export default function App() {
  return (
    <View style={styles.mainComponent}>
      <StatusBar
        animated={true}
        barStyle={Platform.OS === 'ios' ? 'light-content' : 'dark-content'}
        showHideTransition={'slide'}
      />
      <AppNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  mainComponent: {
    flex: 1,
  },
});
