// HomePage.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { storeData, fetchData, clearData } from './Storage';
import EmptyBox from './EmptyBox';
import { useNavigation } from '@react-navigation/native';

const HomePage = () => {
  const [loginMessage, setLoginMessage] = useState(''); 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [canLogin, setCanLogin] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    const clearLoginData = async () => {
      await clearData('username');
      await clearData('password');
      setUsername('');
      setPassword('');
      setLoggedIn(false);
    };

    clearLoginData();
  }, []);

  useEffect(() => {
    const loadLoginData = async () => {
      const storedUsername = await fetchData('username');
      const storedPassword = await fetchData('password');
      if (storedUsername && storedPassword) {
        setUsername(storedUsername);
        setPassword(storedPassword);
        setLoggedIn(true);
        navigation.navigate('Services');
      }
    };
    loadLoginData();
  }, [navigation]);

  useEffect(() => {
    if (username.trim() !== '' && password.trim() !== '') {
        setCanLogin(true);   
    } else {
        setCanLogin(false);
    }
}, [username, password]); 

  const handleLogin = async () => {
    await storeData('username', username);
    await storeData('password', password);
    setLoggedIn(true);
    navigation.navigate('Services'); 
  };

  const handleLogout = async () => {
    await clearData('username');
    await clearData('password');
    setUsername('');
    setPassword('');
    setLoggedIn(false);
  };

  const navigateToServices = () => {
    navigation.navigate('Services');
  }; 

  return ( //The one at the bottom is the first to be displayed
    <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Text style={styles.title}>Welcome to Leilyz's Flower Shop</Text>
          <Text style={styles.subtitle}>Information:</Text>
          <Text style={styles.text}>Contact: ______</Text>
          <Text style={styles.text}>Email: ______</Text>
          <Text style={styles.text}>Instagram: ______</Text>
          <Text style={styles.text}>Hours: ______</Text>

          <Text style={styles.subtitle}>Disclaimer:</Text>
          <Text style={styles.text}>Please place orders at minimum 1 week before desired delivery</Text>

          <EmptyBox height={20} />

          <Text style={styles.subtitle}>Log in to see your past orders</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          {canLogin ? (
          <Button
            title="Login"
            onPress={handleLogin}
            disabled={!canLogin} // Disable button if canLogin is false
          />
        ) : (
          <View style={styles.messageContainer}>
            <Text style={styles.messageText}>{loginMessage}</Text>
          </View>
        )}
        </ScrollView>
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
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 3,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 12,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
  },
  messageContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  messageText: {
    color: 'red',
  },
});

export default HomePage;
