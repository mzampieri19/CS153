import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, ScrollView, Alert} from 'react-native';
import Header from '../Header';
import Book from './Book';
import axios from 'axios';
import EmptyBox from '/Users/michelangelozampieri/Desktop/Repositories/CS153/flower_shop_app/components/background/EmptyBox.js';

const Gallery = () => {
  const [text, setText] = React.useState("Enter a comment");
  const [comment, setComment] = React.useState([]);

const sendComment = async (text) => {
  setComment(text);
  await axios({
    method:'post', 
    url: 'https://flower-server-spu1.onrender.com/comments', 
    data: {name: 'anon', comment: text}
  });
  Alert.alert('Comment Sent', 'Thank you, a memeber of our team will review your comment!');

}; 

  return (
    <ScrollView> 
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        <ImageBackground
          source={require('/Users/michelangelozampieri/Desktop/Repositories/CS153/flower_shop_app/assets/background.png')}
          style={styles.image}
        />
      </View>
      <Header />
      <Text style={styles.title}>Gallery</Text>
      <Text style={styles.subtitle}>Click on any image to zoom in</Text>
      <Book /> 
      <Text style= {styles.subtitle}>Enter a comment:</Text>
      <TextInput 
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        placeholder="Enter a comment"
        onChangeText={text => setText(text)}
        onSubmitEditing={() => {sendComment(text)}}
      />
      <EmptyBox height={50}/>


    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: 'bold',
  },
  backgroundContainer: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.7,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: 'bold',
  },
});

export default Gallery;
