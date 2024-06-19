import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../Header';
import Book from './Book';

const Gallery = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Gallery</Text>
      <Book /> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    padding: 20,
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: 'bold',
  },
});

export default Gallery;
