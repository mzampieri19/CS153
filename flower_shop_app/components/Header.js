import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useValue } from './ValueContext';

const Header = () => {
  const { currentValue } = useValue();

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.username}>Logged in as: {currentValue.username}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: '#f5fcff',
  },
  username: {
    fontSize: 24,
    color: '#333',
    justifyContent: 'center',
  },
});

export default Header;
