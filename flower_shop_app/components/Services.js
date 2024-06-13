import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useValue } from './ValueContext'; 

const LogInPage = () => {
  const { currentValue } = useValue();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.username}>Welcome, {currentValue.username}</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <ButtonWithDescription
          title="Gallery"
          description="Browse a curated selection of handmade bouquets!"
        />
        <ButtonWithDescription
          title="Occasions"
          description="Fill out a short survey about your occasion and we'll get back to you for more details."
        />
        <ButtonWithDescription
          title="Pricing"
          description="See our pricing options for flower arrangements."
        />
        <ButtonWithDescription
          title="Careers"
          description="Join our team!"
        />
        <ButtonWithDescription
          title="Story"
          description="Read about my journey and passion for flowers."
        />
        <ButtonWithDescription
          title="Account"
          description="View your account details."
        />
      </View>
    </View>
  );
};

const ButtonWithDescription = ({ title, description }) => {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
      <Text style={styles.buttonDescription}>{description}</Text>
    </Pressable>
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
