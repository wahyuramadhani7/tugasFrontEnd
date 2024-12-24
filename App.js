import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import CartridgesScreen from './src/screens/CartridgesScreen'; // Pastikan jalur impor sudah benar
import TonerScreen from './src/screens/TonerScreen';
import ContactScreen from './src/screens/ContactScreen';
import LoginScreen from './src/screens/LoginScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cartridges"
          component={CartridgesScreen} // Pastikan nama komponen sudah benar
          options={{ title: 'Ink Cartridges' }}
        />
        <Stack.Screen
          name="Toner"
          component={TonerScreen}
          options={{ title: 'Toner Cartridges' }}
        />
        <Stack.Screen
          name="Contact"
          component={ContactScreen}
          options={{ title: 'Contact Us' }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Login / Register' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;