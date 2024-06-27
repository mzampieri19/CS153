import React, { useRef, useState } from 'react';
import { View, ScrollView, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import BookPage from '/Users/michelangelozampieri/Desktop/Repositories/CS153/flower_shop_app/components/gallery/BookPage.js'; // Adjust path as necessary
import CoverPage from '/Users/michelangelozampieri/Desktop/Repositories/CS153/flower_shop_app/components/gallery/CoverPage.js'; // Adjust path as necessary
import EndPage from '/Users/michelangelozampieri/Desktop/Repositories/CS153/flower_shop_app/components/gallery/BackPage.js'; // Adjust path as necessary

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
    [11, 12],
    [13, 14],
    [15, 16],
  ];

  const zoomLevels = [1, 1, 1, 1, 1, 1, 1, 1];

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.floor(contentOffsetX / BOOK_WIDTH);
    setCurrentPage(index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        <ImageBackground
          source={require('/Users/michelangelozampieri/Desktop/Repositories/CS153/flower_shop_app/assets/background.png')}
          style={styles.image}
        />
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
          <CoverPage />

          <BookPage pages={pages} index={0} zoomLevel={zoomLevels[0]} />
          <BookPage pages={pages} index={2} zoomLevel={zoomLevels[0]} />
          <BookPage pages={pages} index={4} zoomLevel={zoomLevels[0]} />

          <EndPage />

        </ScrollView>
      </View>
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
});

export default Book;
