// Import necessary modules
import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles'; // Import styles from styles.js

// Define the Info component
export default function Info() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Info Screen</Text>
      <Text style={styles.text}>This is the info screen.</Text>
    </View>
  );
}