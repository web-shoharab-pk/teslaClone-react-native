import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles'

const StyleButton = ({type, content, onPress}) => {

    

    const backgroundColor = type === 'primary' ? 'lightblue' : 'black'
    const textColor = type === 'primary' ? 'black' : 'lightblue'

    return (
        <View style={styles.container}>
             <Pressable
              style={[styles.button, {backgroundColor: backgroundColor}]}
              onPress={onPress} >
                 <Text style={[styles.text, {color: textColor}]}>{content}</Text> 
              </Pressable>
        </View>
    );
};

export default StyleButton;