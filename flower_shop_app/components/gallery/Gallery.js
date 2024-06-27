import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import Header from '../Header';
import Book from './Book';

const Gallery = () => {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        <ImageBackground
          source={require('/Users/michelangelozampieri/Desktop/Repositories/CS153/flower_shop_app/assets/background.png')}
          style={styles.image}
        />
      </View>
      <Header />
      <Text style={styles.title}>Gallery</Text>
      <Text style={styles.subtitle}>Click on any image to zoom in</Text>
      <Book /> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: 'bold',
  },
  backgroundContainer: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.7,
  },
  image: {
    flex: 1,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: 'bold',
  },
});

export default Gallery;
