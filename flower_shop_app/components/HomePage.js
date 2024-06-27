import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { storeData, fetchData, clearData } from '/Users/michelangelozampieri/Desktop/Repositories/CS153/flower_shop_app/components/background/Storage.js';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const HomePage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false); // if user is logged in 
  const [canLogin, setCanLogin] = useState(false); // if user entered username and password
  const navigation = useNavigation();

  const server = 'http://localhost:3000/orders';
  const group = 'flower_shop_app';

  useEffect(() => {
    const checkLoginStatus = async () => {
      const storedUsername = await fetchData('username'); // fetch username
      const storedPassword = await fetchData('password'); // fetch password
      if (storedUsername && storedPassword) {
        setUsername(storedUsername); // set username
        setPassword(storedPassword); // set password
        setLoggedIn(true); // set logged in to true
        navigation.navigate('Services', { username }); // brings them to services page
      }
    };
    checkLoginStatus();
  }, [navigation]);

  useEffect(() => {
    logDataServer();
  }, [canLogin]);

  useEffect(() => {
    // enable login button if both username and password are entered
    // right now only checks if they are not empty
    // Will change to check if they are correct
    setCanLogin(username.trim() !== '' && password.trim() !== '');
  }, [username, password]);

  const handleLogin = async () => {
    await storeData('username', username);
    await storeData('password', password);
    setLoggedIn(true);
    logDataServer();
    navigation.navigate('Services'); // redirect to services screen on successful login
  };

  const logDataServer = async () => {
    // Connects and logs username and date accessed to server 
    console.log('Logging data to server');
    let score =
      await axios(
        {
          method: 'post',
          url: server + '/room',
          data: { id: group, uid: username, data: new Date().toISOString() },
        });
    console.dir(score.data)
  };

  const handleLogout = async () => {
    await clearData('username'); // clear username
    await clearData('password'); // clear password
    setUsername('');
    setPassword('');
    setLoggedIn(false);
  };

  return (
    <View style = {styles.container}>
      <View style = {styles.backgroundContainer}>
        <ImageBackground 
          source = {require('/Users/michelangelozampieri/Desktop/Repositories/CS153/flower_shop_app/assets/background.png')} 
          style = {styles.image} 
        />
      </View>
      {!loggedIn ? (
        <ScrollView contentContainerStyle = {styles.contentContainer}>
          <Text style={styles.title}>Welcome to Leilyz's Flower Shop</Text>
          <Text style={styles.subtitle}>Information</Text>
          <Text style={styles.text}>Contact: ____ </Text>
          <Text style={styles.text}>Email: ____ </Text>
          <Text style={styles.text}>Instagram: ____ </Text>
          <Text style={styles.text}>Email: ____ </Text>

          <Text style={styles.subtitle}>Disclaimer</Text>
          <Text style={styles.text}>Please place orders at minimum 1 week before desired delivery.</Text>

          <Text style={styles.subtitle}>Login:</Text>

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
          {canLogin ? ( // if user entered username and password
            <Button
              title="Login"
              onPress={handleLogin}
              disabled={!canLogin} // Disable button if canLogin is false
            />
          ) : ( // if user did not enter username and password
            <View style={styles.messageContainer}>
              <Text style={styles.messageText}>Please enter username and password</Text>
            </View>
          )}
        </ScrollView>
      ) : (
        <View style={styles.loggedInContainer}>
          <Text style={styles.loggedInText}>Welcome, {username}!</Text>
          <Button title="Logout" onPress={handleLogout} />
          <Button title="Services" onPress={() => navigation.navigate('Services', { username })} />
        </View>
        )}
    </View>
  ); 

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    padding: 20,
  },
  backgroundContainer: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.7,
  },
  image: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: 'bold',
    color: 'black',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: 'bold',
    color: 'black',
  },
  text: {
    fontSize: 16,
    marginVertical: 5,
    textAlign: 'center',
    justifyContent: 'center',
    color: 'black',
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 12,
  },
  loggedInContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loggedInText: {
    fontSize: 20,
    marginBottom: 20,
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