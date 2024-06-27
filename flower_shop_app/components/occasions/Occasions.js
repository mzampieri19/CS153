import React from 'react';
import { View, Text, Pressable, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Header from '../Header';
import { ScrollView } from 'react-native-gesture-handler';

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
      <View style={styles.backgroundContainer}>
        <ImageBackground
          source={require('/Users/michelangelozampieri/Desktop/Repositories/CS153/flower_shop_app/assets/background.png')}
          style={styles.image}
        />
      </View>
      <Header />
      <Text style={styles.title}>Select an Occasion</Text>
      <Text style={styles.subtitle}>Select an occasion to be brought to a survey screen to place an order</Text>
        <ScrollView>
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
        </ScrollView>
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
    color: 'white',
  },
  grid: {
    flexDirection: 'col',
    alignItems: 'center',

  },
  button: {
    marginVertical: 10,
    padding: 10,
    width: '100%',
    backgroundColor: '#97FF87',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 100,
    borderRadius: 1000,
  },
  buttonText: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: 'white',
  },
  backgroundContainer: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.7,
  },
  image: {
    flex: 1,
  },
});

export default Occasions;
