import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const BOOK_WIDTH = width * 0.8;
const BOOK_HEIGHT = height * 0.6;

const CoverPage = () => {
  return (
    <View style={[styles.container, { width: BOOK_WIDTH, height: BOOK_HEIGHT }]}>
      <Text style={styles.coverText}>Cover Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'lightgray',
  },
  coverText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default CoverPage;
