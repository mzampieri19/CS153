import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Header from '../Header';

const Occasions = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { username } = route.params || {}; // Get username from route params
  const occasions = [
    'Birthday',
    'Anniversary',
    'Wedding',
    'Graduation',
    'Get Well Soon',
    'Thank You',
    "Funeral",
    'Other',
  ];

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Select an Occasion</Text>
      <View style={styles.grid}>
        {occasions.map((occasion) => (
          <Pressable
            key={occasion}
            style={styles.button}
            onPress={() => navigation.navigate('Survey', { occasion, username })}
          >
            <Text style={styles.buttonText}>{occasion}</Text>
          </Pressable>
        ))}
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'col',
    justifyContent: 'space-around',
    alignItems: 'center',

  },
  button: {
    marginVertical: 15,
    padding: 10,
    width: '80%',
    backgroundColor: '#007BFF',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default Occasions;
