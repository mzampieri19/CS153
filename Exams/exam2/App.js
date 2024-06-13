import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import TabDemo from './components/TabDemo';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TabDemo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch', // Modified to stretch children horizontally
    justifyContent: 'center',
  },
});
