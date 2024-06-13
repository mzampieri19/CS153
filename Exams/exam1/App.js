import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Calculator from './components/Calculator';

const App = () => {
  return (
    <View style={styles.borderedContainer}>
      <SafeAreaView style={styles.container}>
        <Calculator />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  borderedContainer: {
    flex: 1,
    borderWidth: 5,
    borderColor: 'blue',
    margin: 20,
    borderRadius: 20,
  },
  container: {
    flex: 1,
    padding: 16,
  },
});

export default App;