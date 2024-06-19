import React, { useRef, useState } from 'react';
import { View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import BookPage from './BookPage';

const { width, height } = Dimensions.get('window');
const BOOK_WIDTH = width * 0.8;
const BOOK_HEIGHT = height * 0.6;

const Book = () => {
  const scrollViewRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [9, 10],
  ];

  const zoomLevels = [1, 1, 1, 1, 1];

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.floor(contentOffsetX / BOOK_WIDTH);
    setCurrentPage(index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.book}>
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          onScroll={handleScroll}
          scrollEventThrottle={16}
          style={styles.scrollView}
          showsHorizontalScrollIndicator={false}
        >
          {pages.map((pagePair, index) => (
            <View key={index} style={styles.pageContainer}>
              <BookPage index={pagePair[1]} zoomLevel={zoomLevels[index]} />
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  book: {
    width: BOOK_WIDTH,
    height: BOOK_HEIGHT,
    borderWidth: 1,
    overflow: 'hidden',
  },
  scrollView: {
    flex: 1,
    flexDirection: 'row',
  },
  pageContainer: {
    width: BOOK_WIDTH,
    height: BOOK_HEIGHT,
    flexDirection: 'row',
  },
  page: {
    width: BOOK_WIDTH / 2,
    height: BOOK_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
  },
});

export default Book;
