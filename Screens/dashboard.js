// Import necessary modules
import React from 'react';
import { View, Text } from 'react-native';
import styles, { GRADIENT_COLORS } from '../styles'; // Import styles from styles.js
import Loading from './spin'; // 

// Define the SignIn component
export default function SignIn() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In Screen</Text>
    </View>
  );
}