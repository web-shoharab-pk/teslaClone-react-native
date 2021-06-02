import React from 'react';
import { ImageBackground, View, Text } from 'react-native';
import bgImage from '../../assets/images/ModelX.jpeg'
import StyleButton from '../StyleButton';
import styles from './styles'
 
 const CartItem = () => {
     return (
        <View style={styles.carContainer}>
        <ImageBackground
        source={bgImage}
         style={styles.image} /> 
 
          <View style={styles.titles}>
            <Text style={styles.title}>Model S</Text>
            <Text style={styles.subTitle}>Starting at $69410</Text>
          </View>
       <StyleButton
        type="primary" 
        content={"Custom Order"}
        onPress={() => {
          console.warn("custom order was pressed")
        }}
        />
        <StyleButton
        type="secondary" 
        content={"Existing Inventory"}
        onPress={() => {
          console.warn("Existing Inventory was pressed")
        }}
        />
      </View>
     );
 };
 
 export default CartItem;