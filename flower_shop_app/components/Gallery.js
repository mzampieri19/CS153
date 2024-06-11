import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Gallery = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gallery Placeholder</Text>
      <View style={styles.placeholder}>
        <Text style={styles.placeholderText}>Your photos will appear here</Text>
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

export default Gallery;
