import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const About = () => {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        <ImageBackground
          source={require('/Users/michelangelozampieri/Desktop/Repositories/CS153/flower_shop_app/assets/background.png')}
          style={styles.image}
        />
      </View>

        <Text style={styles.title}>About Page</Text>
        <ScrollView>
          <Text style={styles.placeholderText}>This app serves as an app for an online flower shop.</Text>
          <Text style={styles.placeholderText}>The home page, gives user information about the store and prompts the user to log in, app checks that both fields have some texts before allowing log in.</Text>
          <Text style={styles.placeholderText}>The gallery page shows a list of images that can be clicked on to zoom in, images are displayed in a 'book' that you scroll through</Text>
          <Text style={styles.placeholderText}>The services page has buttons that navigate to different pages, such as gallery, occasions, pricing, and careers.</Text>
          <Text style={styles.placeholderText}>The occasions page has a list of occasions that can be clicked on to navigate to a survey page, for the corresponding page</Text>
          <Text style={styles.placeholderText}>The pricing page shows the prices for the different flower arrangements</Text>
          <Text style={styles.placeholderText}>The story page gives a brief description of the story behind the business</Text>
          <Text style={styles.placeholderText}>The careers page has the user enter some infomration like a job application</Text>
          <Text style={styles.placeholderText}>The about page gives information about the app</Text>
          <Text style={styles.placeholderText}>The survey page has the user enter information about the flower arrangement they want to order</Text>
          <Text style={styles.placeholderText}>The account page shows users infomration, this info is held persistantly.</Text>
          <Text style={styles.placeholderText}>The admin page shows a summary of all orders from the server</Text>
      </ScrollView>
    </View>
  ); 
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: 'black',
    marginTop: 30,
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
  backgroundContainer: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.7,
  },
  image: {
    flex: 1,
  },
});

export default About;
