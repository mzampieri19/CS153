import React from 'react';
import { View, Text, StyleSheet, Pressable, ImageBackground, ScrollView} from 'react-native';
import Header from './Header';
import { useNavigation, useRoute } from '@react-navigation/native';


const LogInPage = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { username } = route.params || {};

  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        <ImageBackground
          source={require('/Users/michelangelozampieri/Desktop/Repositories/CS153/flower_shop_app/assets/background.png')}
          style={styles.image}
        />
      </View>
      
      <View style={styles.header}>
        <Header />
      </View>

      <View style={styles.container}>
          <ScrollView>
            <View style={styles.buttonsContainer}>
              <Pressable
                style={styles.button}
                onPress={() => navigation.navigate('Gallery')}
              >
                <Text style={styles.buttonText}>Gallery</Text>
              </Pressable>
              <Text style={styles.buttonDescription}>View our flower arrangements</Text>
            </View>

            <View style={styles.buttonsContainer}>
              <Pressable
                style={styles.button}
                onPress={() => navigation.navigate('Occasions', { username })}
              >
                <Text style={styles.buttonText}>Occasions</Text>
              </Pressable>
              <Text style={styles.buttonDescription}>Select an occasion and send us a survey!</Text>
            </View>

            <View style={styles.buttonsContainer}>
              <Pressable
                style={styles.button}
                onPress={() => navigation.navigate('Pricing')}
              >
                <Text style={styles.buttonText}>Pricing</Text>
              </Pressable>
              <Text style={styles.buttonDescription}>View prices for our flower arrangements</Text>
            </View>
            
            <View style={styles.buttonsContainer}>
              <Pressable
                style={styles.button}
                onPress={() => navigation.navigate('Careers')}
              >
              <Text style={styles.buttonText}>Careers</Text>
              </Pressable>
              <Text style={styles.buttonDescription}>Join our team!</Text>
            </View>
            
            <View style={styles.buttonsContainer}>
              <Pressable
                style={styles.button}
                onPress={() => navigation.navigate('Story')}
              >
                <Text style={styles.buttonText}>Story</Text>
              </Pressable>
              <Text style={styles.buttonDescription}>See who we are and how we got here</Text>
            </View>

            <View style={styles.buttonsContainer}>
              <Pressable
                style={styles.button}
                onPress={() => navigation.navigate('Account')}
              >
                <Text style={styles.buttonText}>Account</Text>
              </Pressable>
              <Text style={styles.buttonDescription}>View your account information</Text>
            </View>
            
            <View style={styles.buttonsContainer}>
              <Pressable
                style={styles.button}
                onPress={() => navigation.navigate('About')}
              >
                <Text style={styles.buttonText}>About</Text>
              </Pressable>
              <Text style={styles.buttonDescription}>About the app</Text>
            </View>

            <View style={styles.buttonsContainer}>
              <Pressable
                style={styles.button}
                onPress={() => navigation.navigate('AdminPage')}
              >
                <Text style={styles.buttonText}>Admin</Text>
              </Pressable>
              <Text style={styles.buttonDescription}>View all incoming orders (must be connected to server)</Text>
            </View>
        </ScrollView>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    padding: 8,
    width: '100%',
    backgroundColor: '#97FF87',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 5,
    borderRadius: 1000,
  },
  buttonText: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonDescription: {
    color: '#F0BD13',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 0,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  backgroundContainer: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.7,
  },
  image: {
    flex: 1,

  },
});

export default LogInPage;
