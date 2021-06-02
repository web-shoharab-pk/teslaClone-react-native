import React from 'react';
import { ImageBackground, View, Text } from 'react-native';
import bgImage from '../../assets/images/ModelX.jpeg'
import StyleButton from '../StyleButton';
import styles from './styles'

const CartItem = (props) => {

  const {name, tagline, image, taglineCTA} = props.car;

  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={image}
        style={styles.image} />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>{tagline} {' '}
        <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
        </Text>
        
      </View>

      <View style={styles.buttonContainer}>
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
    </View>
  );
};

export default CartItem;