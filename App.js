// Import necessary modules
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'; // Import createDrawerNavigator
import Home from './Screens/home'; // Import Home screen
import AboutUs from './Screens/about-us';
import Info from './Screens/info';
import SignIn from './Screens/sign-in';

// Create a Drawer Navigator
const Drawer = createDrawerNavigator();

// Define the App component
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="About Us" component={AboutUs} />
        <Drawer.Screen name="Info" component={Info} />
        <Drawer.Screen name="Sign In" component={SignIn} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}