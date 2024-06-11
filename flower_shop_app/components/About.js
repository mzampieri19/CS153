import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Placeholder</Text>
      <View style={styles.placeholder}>
        <Text style={styles.placeholderText}>This app serves as an app for an online flower shop. The idea is to have one continous home page, that you scroll through.</Text>
        <Text style={styles.placeholderText}>First the home page will show information about the shop and as you scol down it will reveal bottons that take users to different pages.</Text>
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
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  placeholder: {
    width: '90%',
    height: 200,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EEE',
  },
  placeholderText: {
    color: '#AAA',
  },
});

export default About;
