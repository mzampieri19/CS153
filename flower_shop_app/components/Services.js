import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Header from './Header';
import { useNavigation, useRoute } from '@react-navigation/native';


const LogInPage = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { username } = route.params || {};

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>

      <View style={styles.buttonsContainer}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Gallery')}
        >
          <Text style={styles.buttonText}>Gallery</Text>
        </Pressable>
      </View>

      <View style={styles.buttonsContainer}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Occasions', { username })}
        >
          <Text style={styles.buttonText}>Occasions</Text>
        </Pressable>
      </View>
    <View style={styles.buttonsContainer}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Pricing')}
        >
          <Text style={styles.buttonText}>Pricing</Text>
        </Pressable>
      </View><View style={styles.buttonsContainer}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Careers')}
        >
          <Text style={styles.buttonText}>Careers</Text>
        </Pressable>
      </View><View style={styles.buttonsContainer}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Story')}
        >
          <Text style={styles.buttonText}>Story</Text>
        </Pressable>
      </View>
      <View style={styles.buttonsContainer}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Account')}
        >
          <Text style={styles.buttonText}>Account</Text>
        </Pressable>
      </View><View style={styles.buttonsContainer}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('About')}
        >
          <Text style={styles.buttonText}>About</Text>
        </Pressable>
      </View>
      <View style={styles.buttonsContainer}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('AdminPage')}
        >
          <Text style={styles.buttonText}>Admin</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginVertical: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginVertical: 10,
    padding: 10,
    width: '80%',
    backgroundColor: '#007BFF',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonDescription: {
    color: '#FFF',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 5,
  },
});

export default LogInPage;
