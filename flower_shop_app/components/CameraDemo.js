import { StatusBar} from "react-native";
import { StyleSheet, View } from "react-native";

import ImageViewer from "./ImageViewer";

const placeholderImage = require("../assets/flower1.jpg");

export default function CameraDemo() {
  return (
    <View style={styles.container}>
     <View style={styles.imageContainer}>
      <ImageViewer placeholderImageSource={placeholderImage} />
     </View>
      <StatusBar hidden />
    </View>
  );
}