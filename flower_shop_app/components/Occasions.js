import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const Occasions = ({ navigation }) => {
  const occasions = [
    'Birthday',
    'Anniversary',
    'Wedding',
    'Graduation',
    'Get Well Soon',
    'Thank You',
  ];

  return (
    <View style={styles.container}>
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
    justifyContent: 'center',
    alignItems: 'center',
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  button: {
    width: '30%',
    padding: 15,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    margin: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default Occasions;
