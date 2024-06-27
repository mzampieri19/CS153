import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Modal, Dimensions } from 'react-native';
import { imageMap } from '/Users/michelangelozampieri/Desktop/Repositories/CS153/flower_shop_app/components/gallery/ImageMap.js'; 
import { DescriptionMap } from '/Users/michelangelozampieri/Desktop/Repositories/CS153/flower_shop_app/components/gallery/DescriptionMap.js'; 
import { OccasionMap } from '/Users/michelangelozampieri/Desktop/Repositories/CS153/flower_shop_app/components/gallery/OccasionMap.js'; 

const { width, height } = Dimensions.get('window');

const BookPage = ({ pages, index, zoomLevel }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const leftImageIndex = index;
  const rightImageIndex = index + 1;

  const handleImagePress = (image) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  return (
    //top image
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleImagePress(imageMap[leftImageIndex])}>
        <View style={styles.imageContainer}>
        <Image style={[styles.pageImage, { transform: [{ scale: zoomLevel }] }]} source={imageMap[leftImageIndex]} />
        <Text style={styles.imageText}>{DescriptionMap[leftImageIndex]}</Text>
        </View>
      </TouchableOpacity>

      <Text style={styles.Occasion}>{OccasionMap[leftImageIndex]}</Text>
      
      <TouchableOpacity onPress={() => handleImagePress(imageMap[rightImageIndex])}>
        <View style={styles.imageContainer}>
        <Image style={[styles.pageImage, { transform: [{ scale: zoomLevel }] }]} source={imageMap[rightImageIndex]} />
        <Text style={styles.imageText}>{DescriptionMap[rightImageIndex]}</Text>
        </View>
      </TouchableOpacity>

      <Text style={styles.Occasion}>{OccasionMap[rightImageIndex]}</Text>
      
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
  Occasion: {
    fontSize: 16,
    marginBottom: 10,
  },
  imageContainer: {
    width: 200,
    height: 200,
    margin: 7,
    borderWidth: 2,
    marginLeft: 55,
    marginRight: 55,
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
