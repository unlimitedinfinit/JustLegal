// Import necessary modules
import React from 'react';
import { View, Text } from 'react-native';
import styles, { GRADIENT_COLORS } from '../styles'; // Import styles from styles.js
import Loading from './spin'; // 

// Define the AboutUs component
export default function AboutUs() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Us ' Just Legal ' a service of Just Liberty Incorporated a Tax Exempt Non-Profit Civil rights group.</Text>
      <Text style={styles.text}>Just Legal is a legal service app designed to provide education, resources, and empowerment to all citizens in need of legal help.</Text>
    </View>
  );
}