import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Story = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Story Placeholder</Text>
      <View style={styles.placeholder}>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  placeholder: {
    width: '90%',
    height: 200,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EEE',
  },
  placeholderText: {
    color: '#AAA',
  },
});

export default Story;
