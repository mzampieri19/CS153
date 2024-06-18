import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Modal, Dimensions } from 'react-native';
import { imageMap } from './ImageMap'; // Adjust the import path as necessary
import { DescriptionMap } from './DescriptionMap'; // Adjust the import path as necessary

const { width, height } = Dimensions.get('window');

const BookPage = ({ index, zoomLevel }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImagePress = (image) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={() => handleImagePress(imageMap[index * 2 - 1])}>
        <View style={styles.imageContainer}>
          <Image style={[styles.pageImage, { transform: [{ scale: zoomLevel }] }]} source={imageMap[index * 2 - 1]} />
          <Text style={styles.imageText}>{DescriptionMap[index * 2 -1]}</Text>
        </View>
      </TouchableOpacity>


      <TouchableOpacity onPress={() => handleImagePress(imageMap[index * 2])}>
      <View style={styles.imageContainer}>
        <Image style={[styles.pageImage, { transform: [{ scale: zoomLevel }] }]} source={imageMap[index * 2]} />
        <Text style={styles.imageText}>{DescriptionMap[index * 2]}</Text>
      </View>
      </TouchableOpacity>
      
      <Modal visible={modalVisible} transparent={true}>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.modalBackground} onPress={() => setModalVisible(false)}>
            <Image style={styles.modalImage} source={selectedImage} />
          </TouchableOpacity>
        </View>
      </Modal>

    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    marginBottom: 10,
  },
  imageContainer: {
    width: 200,
    height: 200,
    margin: 7,
    borderWidth: 2,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  imageText: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 5,
    borderRadius: 5,
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalImage: {
    width: width,
    height: height,
    resizeMode: 'contain',

  },
});

export default BookPage;
