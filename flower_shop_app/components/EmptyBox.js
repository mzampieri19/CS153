import React from 'react';
import { View } from 'react-native';

const EmptyBox = ({ height, backgroundColor = 'transparent' }) => {
  return <View style={{ height, backgroundColor }} />;
};

export default EmptyBox;