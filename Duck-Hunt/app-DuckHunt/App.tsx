import 'react-native-gesture-handler';

import { StyleSheet, Text, View } from 'react-native';

import StackNavigator from './Navigator/StackNavigator';

export default function App({}: any)  {
  return (
    <StackNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
