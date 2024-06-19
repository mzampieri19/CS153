import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { fetchData } from './Storage';

const Header = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const loadUsername = async () => {
      try {
        const storedUsername = await fetchData('username');
        if (storedUsername) {
          setUsername(storedUsername);
        }
      } catch (error) {
        console.error('Failed to load username:', error);
      }
    };

    loadUsername();
  }, []);

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.username}>Logged in as: {username}</Text>
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
