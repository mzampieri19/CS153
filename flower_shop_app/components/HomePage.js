import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, TextInput } from 'react-native';
import { useValue } from './ValueContext';

function HomePage ({ navigation }) {
  const { currentValue, setCurrentValue } = useValue();

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.title}>Welcome to Leilyz's Flower Shop</Text>
        <Text style={styles.subtitle}>Information:</Text>
        <Text style={styles.text}>Contact: ______</Text>
        <Text style={styles.text}>Email: ______</Text>
        <Text style={styles.text}>Instagram: ______</Text>
        <Text style={styles.text}>Hours: ______</Text>
        <Text style={styles.subtitle}>Disclaimer:</Text>
        <Text style={styles.text}>Please place orders at minimum 1 week before desired delivery</Text>
        <Text style={styles.subtitle}>Log in to see your past orders </Text>
        
        <Text style={styles.text}>Username</Text>
        <TextInput 
                style={styles.input}
                onChangeText={(text) => {
                    setCurrentValue({...currentValue, username: text});
                }}
            />
        <Text style={styles.text}>Password</Text>
        <TextInput 
                style={styles.input}
                onChangeText={(text) => {
                    setCurrentValue({...currentValue, password: text});
                }}
            />
            <Text style={styles.text}>Password: {currentValue['password']}</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Gallery')}
        >
          <Text style={styles.buttonText}>Gallery</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Occasions')}
        >
          <Text style={styles.buttonText}>Occasions</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Pricing')}
        >
          <Text style={styles.buttonText}>Pricing</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Careers')}
        >
          <Text style={styles.buttonText}>Careers</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Story')}
        >
          <Text style={styles.buttonText}>Story</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Other')}
        >
          <Text style={styles.buttonText}>Other</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('About')}
        >
          <Text style={styles.buttonText}>About</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    padding: 20,
  },
  title: {
    fontSize: 48,
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: 'bold',

  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 2,
  },
  buttonsContainer: {
    marginTop: 24,
    alignItems: 'center',
  },
  button: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default HomePage;
