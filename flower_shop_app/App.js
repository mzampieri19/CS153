import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Gallery from './components/Gallery'; 
import HomePage from './components/HomePage';
import Occasions from './components/Occasions';
import Pricing from './components/Pricing';
import Careers from './components/Careers';
import Story from './components/Story';
import Other from './components/Other';
import About from './components/About';
import Survey from './components/Survey';
import { ValueProvider } from './components/ValueContext';


const Stack = createStackNavigator();

const App = () => {
  return (
    <ValueProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Gallery" component={Gallery} />
          <Stack.Screen name="Occasions" component={Occasions} />
          <Stack.Screen name="Pricing" component={Pricing} />
          <Stack.Screen name="Careers" component={Careers} />
          <Stack.Screen name="Story" component={Story} />
          <Stack.Screen name="Other" component={Other} />
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

export default App;