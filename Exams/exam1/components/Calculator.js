import React, { useState } from 'react';
import { Text, View, Pressable, TextInput, StyleSheet } from 'react-native';

const Calculator = () => {
    const [sides, setSides] = useState('');
    const [area, setArea] = useState(null);

    const calculateArea = () => {
        const [a, b, c] = sides.split(' ').map(parseFloat);

    if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
      const s = (a + b + c) / 2;
      const calculatedArea = Math.sqrt(s * (s - a) * (s - b) * (s - c));
      setArea(calculatedArea);
    } else {
      setArea(0);
    }
  };

  return (
    <View style={styles.container}>
      <Text style = {styles.title}>Calculate area of triangle by Heron's Rule</Text>
      <Text style = {styles.text}> Write the code for this app which calculates  </Text>
      <Text style = {styles.text}> area = MATH.sqrt(s*(s-a)*(s-b)*(s-c)) </Text>
      <Text style = {styles.text}> where s = (a+b+c)/2 </Text>
      <TextInput
        style={styles.input}
        value={sides}
        onChangeText={setSides}
        keyboardType="numeric"
      />
      <Pressable style={styles.buttonContainer} onPress={calculateArea}>
        <Text style={styles.buttonText}>CALCULATE AREA</Text>
      </Pressable>
        <Text style = {styles.text}> area is: {area}</Text> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    color: 'yellow',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  text: {
    fontSize: 24,
    marginBottom: 4,
  },
  input: {
    height: 90,
    width: 250,
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 0,
    paddingHorizontal: 8,
    backgroundColor: 'yellow',
  },
  buttonContainer: {
    width: 230,
    height: 50,
    backgroundColor: '#2d97eb',
    justifyContent: 'center',
    fontSize: 64,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontSize: 24,
  },
});

export default Calculator;
