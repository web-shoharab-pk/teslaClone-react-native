import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import bgImage from './assets/images/ModelX.jpeg' 
import CartItem from './components/CarItem';

export default function App() {
  return (
    <View style={styles.container}>

     <CartItem />
 

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  
});
