import 'regenerator-runtime/runtime';
import * as React from 'react';
import { SafeAreaView, StyleSheet, View} from 'react-native';
import HomePage from './components/HomePage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Gallery from './components/Gallery';
import { ValueProvider } from './components/ValueContext';
import Services from './components/Services';
import Occasions from './components/Occasions';
import Pricing from './components/Pricing';
import Story from './components/Story';
import About from './components/About';
import Careers from './components/Careers';
import Survey from './components/Survey';

const Stack = createStackNavigator();

const MainApp = () => {
  return (
    <ValueProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name = "Services" component = {Services} />
          <Stack.Screen name="Gallery" component={Gallery} />
          <Stack.Screen name="Occasions" component={Occasions} />
          <Stack.Screen name="Pricing" component={Pricing} />
          <Stack.Screen name="Careers" component={Careers} />
          <Stack.Screen name="Story" component={Story} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="Survey" component={Survey} />
        </Stack.Navigator>
      </NavigationContainer>
    </ValueProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MainApp;

