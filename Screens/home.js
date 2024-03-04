import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Home() {
  return (
    <View style={styles.container}>
      <Icon name="home" size={30} color="#900" />
      <Text style={styles.title}>Welcome to Just Legal!</Text>
      <Text style={styles.text}>Your legal resource guide to justice & law!</Text>
      <Text style={centeredText.text}>Brought to you by: {'\n'}Just Liberty Incorporated {'\n'} A tax exempt Non-Profit organization </Text>
      <View style={{ marginTop: 20 }}>
        <Icon name="person" size={30} color="#900" />
        <Text style={styles.title}>Resources & Empowerment!</Text>
        <Text style={styles.text}>Civil Rights, Legal Terminology, Know your Rights.</Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <Icon name="search" size={30} color="#900" />
        <Text style={styles.title}>A.I. Tailored Assistance</Text>
        <Text style={styles.text}>Understand, Summarize, Draft, Tips, Resources</Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <Icon name="mail" size={30} color="#900" />
        <Text style={styles.title}>Contact Information</Text>
        <Text style={centeredText.text}>Just Liberty Incorporated {'\n'}Our WebSite {'\n'}www.truejust.org {'\n'} Email: {'\n'}contact@truejust.org </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // ... other styles
});

const centeredText = StyleSheet.create({
  text: {
    textAlign: 'center',
  },
});