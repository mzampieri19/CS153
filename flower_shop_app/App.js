import * as React from 'react';
import { SafeAreaView, StyleSheet, View} from 'react-native';
import HomePage from './components/HomePage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Gallery from './components/Gallery';
import { ValueProvider } from './components/ValueContext';
import Services from './components/Services';

const Stack = createStackNavigator();

const App = () => {
  return (
    <ValueProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name = "Services" component = {Services} />
          <Stack.Screen name="Gallery" component={Gallery} />
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

