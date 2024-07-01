import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const BOOK_WIDTH = width * 0.8;
const BOOK_HEIGHT = height * 0.6;

const CoverPage = () => {
  return (
    <View style={[styles.container, { width: BOOK_WIDTH, height: BOOK_HEIGHT }]}>
      <Text style={styles.coverText}>Cover Page</Text>
      <Text style={styles.text}>Swipe right to scroll through some selected bouquets           ---{'>'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: 'orange',
  },
  coverText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    marginVertical: 5,
    textAlign: 'center',
    justifyContent: 'center',
    color: 'black',
  },
});

export default CoverPage;
