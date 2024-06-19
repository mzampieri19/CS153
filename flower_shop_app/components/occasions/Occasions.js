import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Header from '../Header';

const Occasions = ({ navigation }) => {
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
            onPress={() => navigation.navigate('Survey', { occasion })}
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
