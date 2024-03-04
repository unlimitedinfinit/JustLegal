// Import necessary modules
import React, { useState } from 'react';
import { Text } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import styles, { GRADIENT_COLORS } from '../styles'; // Import styles from styles.js
import Loading from './spin'; // Import the Loading component

// Define the SignIn component
export default function SignIn() {
  const [isLoading, setIsLoading] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000); // Adjust the delay as needed
    }, [])
  );

  return (
    <LinearGradient colors={GRADIENT_COLORS} style={styles.gradient}>
      <Loading isLoading={isLoading} />
      <Text style={styles.title}>Info Screen!</Text>
    </LinearGradient>
  );
}