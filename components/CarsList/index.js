import React from 'react';
import { View, FlatList, Dimensions } from 'react-native';
import styles from './styles';
import cars from './Cars'
import CartItem from '../CarItem'; 


const CarsList = () => {
    console.log(cars)
    return (
        <View style={styles.container}>
            <FlatList
            showsVerticalScrollIndicator={false}
                data={cars}
                renderItem={({ item }) =>
                 <CartItem key={item.id} car={item} />
                }
               snapToAlignment={'start'}
               decelerationRate={'fast'} 
               snapToInterval={Dimensions.get('window').height}
            />

        </View>
    );
};

export default CarsList;