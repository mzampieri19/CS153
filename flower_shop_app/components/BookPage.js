import React, { useRef, useState } from 'react';
import { View, ScrollView, Animated, StyleSheet, Dimensions, Images , Text} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const PAGE_WIDTH = SCREEN_WIDTH * 0.9;

const BookPage = ({index}) => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>This is a book page, will enter images! page {index}</Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    scrollView: {
      flex: 1,
      flexDirection: 'row',
    },
    pageContainer: {
      width: PAGE_WIDTH,
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    pageImage: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
    title: {
        fontSize: 12,
    }
  });

export default BookPage;