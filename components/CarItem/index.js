import React from 'react';
import { ImageBackground, View, Text } from 'react-native';
import bgImage from '../../assets/images/ModelX.jpeg'
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
       
      </View>
     );
 };
 
 export default CartItem;